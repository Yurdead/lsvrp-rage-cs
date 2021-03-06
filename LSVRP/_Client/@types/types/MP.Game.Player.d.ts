/// <reference path="../index.d.ts" />

declare interface MpGamePlayer {
    setHealthRechargeMultiplier(multiplier: number): void;
    setWantedLevelMultiplier(multiplier: number): void;
    setAllRandomPedsFlee(toggle: boolean): void;
    isSpecialAbilityMeterFull(): boolean;
    getWantedLevelRadius(): boolean;
    arePlayerStarsGreyedOut(): boolean;
    getPlayerTargetEntity(entity: MpEntity | object): boolean;
    setPlayerClothLockCounter(value: number): void;
    enableSpecialAbility(toggle: boolean): void;
    specialAbilityDepleteMeter(p1: boolean): void;
    getEntityPlayerIsFreeAimingAt(entity: MpEntity | object): boolean;
    specialAbilityChargeSmall(p1: boolean, p2: boolean): void;
    setDisableAmbientMeleeMove(toggle: boolean): void;
    specialAbilityReset(): void;
    isPlayerFreeAimingAtEntity(entity: MpEntity | object): boolean;
    specialAbilityFillMeter(p1: boolean): void;
    isSpecialAbilityActive(): boolean;
    intToPlayerindex(value: number): MpPlayer | object;
    setPoliceRadarBlips(toggle: boolean): void;
    setAllRandomPedsFleeThisFrame(): void;
    simulatePlayerInputGait(amount: number, gaitType: number, speed: number, p4: boolean, p5: boolean): void;
    forceCleanupForAllThreadsWithThisName(name: string, cleanupFlags: number): void;
    setIgnoreLowPriorityShockingEvents(toggle: boolean): void;
    getTimeSincePlayerHitVehicle(): number;
    disablePlayerFiring(toggle: boolean): void;
    specialAbilityLock(playerModel: number | string): void;
    setRunSprintMultiplierForPlayer(multiplier: number): void;
    isPlayerTargettingEntity(entity: MpEntity | object): boolean;
    hasAchievementBeenPassed(achievement: number): boolean;
    displaySystemSigninUi(unk: boolean): void;
    reserveEntityExplodesOnHighExplosionCombo(p1: number): void;
    setWantedLevelDifficulty(difficulty: number): void;
    specialAbilityDeactivateFast(): void;
    intToParticipantindex(value: number): number;
    setAutoGiveParachuteWhenEnterPlane(toggle: boolean): void;
    setPlayerClothPackageIndex(index: number): void;
    specialAbilityChargeNormalized(normalizedValue: number, p2: boolean): void;
    restorePlayerStamina(p1: number): void;
    setSpecialAbilityMultiplier(multiplier: number): void;
    setSwimMultiplierForPlayer(multiplier: number): void;
    setMaxWantedLevel(maxWantedLevel: number): void;
    startPlayerTeleport(x: number, y: number, z: number, heading: number, p5: boolean, p6: boolean, p7: boolean): void;
    setMeleeWeaponDefenseModifier(modifier: number): void;
    arePlayerFlashingStarsAboutToDrop(): boolean;
    setPlayerTargetingMode(targetMode: number): void;
    isSpecialAbilityEnabled(): boolean;
    specialAbilityChargeAbsolute(p1: number, p2: boolean): void;
    resetWantedLevelDifficulty(): void;
    forceCleanup(cleanupFlags: number): void;
    giveAchievementToPlayer(achievement: number): boolean;
    startFiringAmnesty(duration: number): void;
    disableVehicleRewards(): void;
    setAreasGeneratorOrientation(): void;
    isSpecialAbilityUnlocked(playerModel: number | string): boolean;
    hasForceCleanupOccurred(cleanupFlags: number): boolean;
    setAirDragMultiplierForPlayersVehicle(multiplier: number): void;
    getTimeSincePlayerDroveOnPavement(): number;
    specialAbilityDeactivate(): void;
    setDispatchCopsForPlayer(toggle: boolean): void;
    getTimeSincePlayerDroveAgainstTraffic(): number;
    setHudAnimStopLevel(toggle: boolean): void;
    canPlayerStartMission(): boolean;
    getTimeSincePlayerHitPed(): number;
    reportCrime(crimeType: number, wantedLvlThresh: number): void;
    specialAbilityChargeContinuous(p1: boolean): void;
    playerAttachVirtualBound(p0: number,
        p1: number,
        p2: number,
        p3: number,
        p4: number,
        p5: number,
        p6: number,
        p7: number): void;
    specialAbilityChargeMedium(p1: boolean, p2: boolean): void;
    specialAbilityUnlock(playerModel: number | string): void;
    specialAbilityChargeLarge(p1: boolean, p2: boolean): void;
    forceCleanupForThreadWithThisId(id: number, cleanupFlags: number): void;
    getWantedLevelThreshold(wantedLevel: number): number;
}