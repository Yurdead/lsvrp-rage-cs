/// <reference path="../index.d.ts" />

declare interface MpGamePed {
    isAValidLipstickColor(colorId: number): boolean;
    isAnyPedNearPoint(x: number, y: number, z: number, radius: number): boolean;
    setCreateRandomCops(toggle: boolean): void;
    removeActionModeAsset(asset: string): void;
    setScenarioPedsToBeReturnedByNextCommand(value: boolean): void;
    isCopPedInArea3d(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): boolean;
    setAiWeaponDamageModifier(value: number): void;
    addScenarioBlockingArea(p0: number,
        p1: number,
        p2: number,
        p3: number,
        p4: number,
        p5: number,
        p6: boolean,
        p7: boolean,
        p8: boolean,
        p9: boolean): void;
    setGroupFormationSpacing(groupId: number, p1: number, p2: number, p3: number): void;
    isSynchronizedSceneRunning(sceneId: number): boolean;
    attachSynchronizedSceneToEntity(sceneId: number, entity: MpEntity | object, boneIndexId: number): void;
    setScenarioPedsSpawnInSphereArea(p0: object, p1: object, p2: object, p3: object, p4: object): void;
    requestActionModeAsset(asset: string): void;
    requestStealthModeAsset(asset: string): void;
    removeScenarioBlockingArea(p0: object, p1: boolean): void;
    canCreateRandomPed(unk: boolean): boolean;
    setGroupSeparationRange(groundHandle: number, separationRange: number): void;
    createNmMessage(startImmediately: boolean, messageId: number): void;
    setCreateRandomCopsOnScenarios(toggle: boolean): void;
    getAnimInitialOffsetRotation(animDict: string,
        animName: string,
        x: number,
        y: number,
        z: number,
        xRot: number,
        yRot: number,
        zRot: number,
        p8: number,
        p9: number): MpVector3;
    setScriptedConversionCoordThisFrame(x: number, y: number, z: number): void;
    getPedAsGroupMember(groupId: number, memberNumber: number): MpPed;
    getPedAsGroupLeader(groupId: number): MpPed;
    clearRelationshipBetweenGroups(relationship: number, group1: string | number, group2: string | number): void;
    getNumParentPedsOfType(type: number): number;
    isAValidBlushColor(colorId: number): boolean;
    isSynchronizedSceneLooped(sceneId: number): boolean;
    isPedRespondingToEvent(p0: object, p1: object): boolean;
    resetGroupFormationDefaultSpacing(groupHandle: number): void;
    setAiMeleeWeaponDamageModifier(modifier: number): void;
    getFirstParentIdForPedType(type: number): number;
    setSynchronizedSceneOrigin(sceneId: number,
        x: number,
        y: number,
        z: number,
        roll: number,
        pitch: number,
        yaw: number,
        p7: boolean): void;
    setPedAlternateWalkAnim(p0: object, p1: object, p2: object, p3: number, p4: boolean): void;
    detachSynchronizedScene(sceneId: number): void;
    isPedheadshotReady(handle: number): boolean;
    setSynchronizedScenePhase(sceneId: number, phase: number): void;
    setScenarioPedDensityMultiplierThisFrame(p0: number, p1: number): void;
    doesGroupExist(groupId: number): boolean;
    hasPedReceivedEvent(p0: object, p1: object): boolean;
    getRandomPedAtCoord(x: number,
        y: number,
        z: number,
        xRadius: number,
        yRadius: number,
        zRadius: number,
        pedType: number): MpPed;
    clearPedAlternateWalkAnim(p0: object, p1: number): void;
    setCreateRandomCopsNotOnScenarios(toggle: boolean): void;
    createSynchronizedScene(x: number, y: number, z: number, roll: number, pitch: number, yaw: number, p6: number):
        number;
    getGroupSize(groupId: number, unknown: object, sizeInMembers: number): void;
    removeGroup(groupId: number): void;
    createGroup(unused: number): number;
    removeStealthModeAsset(asset: string): void;
    setPedDensityMultiplierThisFrame(multiplier: number): void;
    getRelationshipBetweenGroups(group1: string | number, group2: string | number): number;
    getTattooZone(collection: string | number, overlay: string | number): number;
    isPedheadshotValid(handle: number): number;
    isAnyPedShootingInArea(x1: number,
        y1: number,
        z1: number,
        x2: number,
        y2: number,
        z2: number,
        p6: boolean,
        p7: boolean): boolean;
    createRandomPed(posX: number, posY: number, posZ: number): MpPed;
    removeRelationshipGroup(groupHash: string | number): void;
    setSynchronizedSceneRate(sceneId: number, rate: number): void;
    getAnimInitialOffsetPosition(animDict: string,
        animName: string,
        x: number,
        y: number,
        z: number,
        xRot: number,
        yRot: number,
        zRot: number,
        p8: number,
        p9: number): MpVector3;
    setRelationshipBetweenGroups(relationship: number, group1: string | number, group2: string | number): void;
    getClosestPed(x: number,
        y: number,
        z: number,
        radius: number,
        p4: boolean,
        p5: boolean,
        outPed: MpPed,
        p7: boolean,
        p8: boolean,
        pedType: number): MpPed;
    disposeSynchronizedScene(scene: number): void;
    setGroupFormation(groupId: number, formationType: number): void;
    getNumHeadOverlayValues(overlayId: number): number;
    createPed(pedType: number,
        modelHash: string | number,
        x: number,
        y: number,
        z: number,
        heading: number,
        networkHandle: boolean,
        pedHandle: boolean): MpPed;
    setPedToRagdollWithFall(p0: object,
        p1: object,
        p2: object,
        p3: object,
        p4: object,
        p5: object,
        p6: object,
        p7: object,
        p8: object,
        p9: object,
        p10: object,
        p11: object,
        p12: object,
        p13: object): boolean;
    getSynchronizedSceneRate(sceneId: number): number;
    setSynchronizedSceneLooped(sceneId: number, toggle: boolean): void;
    getPeadheadshotTxdString(handle: number): string;
    isAValidHairColor(colorId: number): boolean;
    getSynchronizedScenePhase(sceneId: number): number;
    hasActionModeAssetLoaded(asset: string): boolean;
    setPedReserveParachuteTintIndex(p0: object, p1: object): void;
    hasStealthModeAssetLoaded(asset: string): boolean;
    setPedNonCreationArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): void;
    addRelationshipGroup(name: string, groupHash: string | number): string | number;
    setTimeExclusiveDisplayTexture(p0: object, p1: boolean): void;
}