--[[
	PhotoRig — reusable capture rig for portfolio cover screenshots.

	Not part of any demo repo. Injected into a throwaway `rojo build` .rbxlx
	launched just for a screenshot session, and never committed alongside the
	demo's own source. Each case fills in CASE_SETUP (arrange the scene so the
	system is mid-action) and SHOTS (camera framings to cycle through) below,
	then this file is copied into the launched instance's ServerScriptService
	via the MCP, not into the demo repo on disk.

	Usage: set CASE_SETUP and SHOTS, then this script runs on its own once
	the server starts. Watch the output for `[[PHOTO]] shot=<n> t=<clock>`
	lines — each marks the moment to grab a screenshot for that framing.
]]

local StarterGui = game:GetService("StarterGui")
local Workspace = game:GetService("Workspace")

-- ===== Per-case config — replace both blocks per case, keep everything else =====

local WARMUP_TIME = 3 -- seconds to let the system reach steady state before shooting

local function caseSetup()
	-- Case-specific: claim plots, spawn dummies, open UI, etc.
	-- Left empty in the template; each case injects its own version.
end

local SHOTS = {
	-- { position = Vector3.new(0, 10, 20), lookAt = Vector3.new(0, 0, 0), hold = 2 },
}

-- ===== Rig mechanics — shared across every case =====

pcall(function()
	StarterGui:SetCoreGuiEnabled(Enum.CoreGuiType.All, false)
end)

local camera = Workspace.CurrentCamera
camera.CameraType = Enum.CameraType.Scriptable

task.spawn(function()
	local ok, err = pcall(caseSetup)
	if not ok then
		warn("[PhotoRig] caseSetup failed: " .. tostring(err))
	end

	task.wait(WARMUP_TIME)

	for i, shot in ipairs(SHOTS) do
		camera.CameraType = Enum.CameraType.Scriptable
		camera.CFrame = CFrame.new(shot.position, shot.lookAt)
		print(("[[PHOTO]] shot=%d t=%f"):format(i, os.clock()))
		task.wait(shot.hold or 2)
	end

	print("[[PHOTO]] done")
end)
