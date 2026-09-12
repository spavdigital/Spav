#!/usr/bin/env python3
"""Empacota uma pasta de skill em um arquivo .skill (zip).

Uso:
    python3 empacotar.py <pasta-da-skill> [-o <destino>]

Valida o SKILL.md antes de empacotar: frontmatter presente, `name` no formato
aceito e coerente com o nome da pasta, `description` preenchida e dentro do
limite. Falha com mensagem explicando o que corrigir, em vez de gerar um
pacote que será rejeitado na instalação.
"""

import argparse
import pathlib
import re
import sys
import zipfile

NOME_VALIDO = re.compile(r"^[a-z0-9]+(-[a-z0-9]+)*$")
RESERVADAS = ("claude", "anthropic")
LIMITE_NOME = 64
LIMITE_DESCRICAO = 1024
IGNORAR = {".DS_Store", "__pycache__", ".git", ".pytest_cache"}


def erro(mensagem: str) -> None:
    print(f"erro: {mensagem}", file=sys.stderr)
    sys.exit(1)


def ler_frontmatter(caminho: pathlib.Path) -> dict:
    texto = caminho.read_text(encoding="utf-8")
    if not texto.startswith("---"):
        erro(f"{caminho} nao comeca com frontmatter delimitado por ---")
    partes = texto.split("---", 2)
    if len(partes) < 3:
        erro(f"{caminho} tem frontmatter aberto mas nao fechado com ---")

    campos: dict[str, str] = {}
    chave = None
    for linha in partes[1].splitlines():
        if not linha.strip():
            continue
        casamento = re.match(r"^([A-Za-z_-]+):\s*(.*)$", linha)
        if casamento:
            chave = casamento.group(1)
            campos[chave] = casamento.group(2).strip()
        elif chave:
            # continuacao de valor em varias linhas
            campos[chave] = (campos[chave] + " " + linha.strip()).strip()
    return campos


def validar(pasta: pathlib.Path) -> str:
    skill_md = pasta / "SKILL.md"
    if not skill_md.is_file():
        erro(f"{pasta} nao contem SKILL.md")

    campos = ler_frontmatter(skill_md)

    nome = campos.get("name", "")
    if not nome:
        erro("frontmatter sem campo obrigatorio 'name'")
    if len(nome) > LIMITE_NOME:
        erro(f"'name' tem {len(nome)} caracteres; o limite e {LIMITE_NOME}")
    if not NOME_VALIDO.match(nome):
        erro(f"'name' invalido: '{nome}'. Use minusculas, numeros e hifens.")
    for reservada in RESERVADAS:
        if reservada in nome:
            erro(f"'name' contem a palavra reservada '{reservada}'")
    if nome != pasta.name:
        erro(f"'name' e '{nome}' mas a pasta se chama '{pasta.name}'; devem ser iguais")

    descricao = campos.get("description", "")
    if not descricao:
        erro("frontmatter sem campo obrigatorio 'description'")
    if len(descricao) > LIMITE_DESCRICAO:
        erro(
            f"'description' tem {len(descricao)} caracteres; "
            f"o limite e {LIMITE_DESCRICAO}"
        )
    if "<" in descricao and ">" in descricao:
        print(
            "aviso: 'description' parece conter tags; tags XML nao sao aceitas.",
            file=sys.stderr,
        )
    if len(descricao) < 40:
        print(
            "aviso: 'description' muito curta. Ela decide se a skill dispara; "
            "diga o que faz, quando usar e quando nao usar.",
            file=sys.stderr,
        )

    return nome


def deve_incluir(caminho: pathlib.Path) -> bool:
    return not any(parte in IGNORAR for parte in caminho.parts)


def empacotar(pasta: pathlib.Path, destino: pathlib.Path) -> int:
    total = 0
    with zipfile.ZipFile(destino, "w", zipfile.ZIP_DEFLATED) as pacote:
        for caminho in sorted(pasta.rglob("*")):
            if not caminho.is_file() or not deve_incluir(caminho.relative_to(pasta)):
                continue
            pacote.write(caminho, caminho.relative_to(pasta.parent))
            total += 1
    return total


def main() -> None:
    analisador = argparse.ArgumentParser(description="Empacota uma skill em .skill")
    analisador.add_argument("pasta", help="pasta da skill, contendo SKILL.md")
    analisador.add_argument("-o", "--destino", help="caminho do .skill de saida")
    argumentos = analisador.parse_args()

    pasta = pathlib.Path(argumentos.pasta).expanduser().resolve()
    if not pasta.is_dir():
        erro(f"{pasta} nao e uma pasta")

    nome = validar(pasta)
    destino = (
        pathlib.Path(argumentos.destino).expanduser().resolve()
        if argumentos.destino
        else pasta.parent / f"{nome}.skill"
    )
    destino.parent.mkdir(parents=True, exist_ok=True)

    total = empacotar(pasta, destino)
    tamanho = destino.stat().st_size
    print(f"{destino}  ({total} arquivos, {tamanho} bytes)")


if __name__ == "__main__":
    main()
