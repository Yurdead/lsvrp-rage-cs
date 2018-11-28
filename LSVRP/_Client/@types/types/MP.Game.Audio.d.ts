/// <reference path="../index.d.ts" />

declare interface MpGameAudio {
    startAudioScene(sceneName: string): boolean;
    isAmbientZoneEnabled(ambientZone: string): boolean;
    getVehicleDefaultHorn(vehicle: MpVehicle | object): string | number;
    prepareSynchronizedAudioEventForScene(p0: object, p1: object): boolean;
    startAlarm(alarmName: string, p2: boolean): void;
    setMobileRadioEnabledDuringGameplay(toggle: boolean): void;
    clearAmbientZoneListState(p0: object, p1: boolean): void;
    overrideTrevorRage(p0: object): void;
    setUserRadioControlEnabled(p0: boolean): void;
    setAmbientZoneStatePersistent(ambientZone: string, p1: boolean, p2: boolean): void;
    prepareMusicEvent(eventName: string): boolean;
    loadStream(streamName: string, soundSet: string): boolean;
    specialFrontendEqual(x: number, y: number, z: number): void;
    clearAmbientZoneState(p0: object, p1: boolean): void;
    isAlarmPlayer(alarmName: string): boolean;
    startScriptPhoneConversation(p0: boolean, p1: boolean): void;
    getNetworkIdFromSoundId(soundId: number): number;
    stopAllAlarms(stop: boolean): void;
    requestScriptAudioBank(p0: string, p1: boolean): boolean;
    setVariableOnStream(p0: string, p1: number): void;
    freezeRadioStation(radioStation: string): void;
    playAmbientSpeechWithVoice(p0: MpPed | object,
        speechName: string,
        voiceName: string,
        speechParam: string,
        p4: boolean): void;
    releaseSoundId(soundId: number): void;
    setAggressiveHorns(toggle: boolean): void;
    setStaticEmitterEnabled(emitterName: string, toggle: boolean): void;
    preloadScriptConversation(p0: boolean, p1: boolean, p2: boolean, p3: boolean): void;
    setCutsceneAudioOverride(p0: string): void;
    setGpsActive(active: boolean): void;
    loadStreamWithStartOffset(streamName: string, startOffset: number, soundSet: string): boolean;
    cancelMusicEvent(eventName: string): boolean;
    preloadScriptPhoneConversation(p0: boolean, p1: boolean): void;
    getNumberOfPassengerVoiceVariations(p0: object): number;
    playSoundFrontend(soundId: number, audioName: string, audioRef: string, p3: boolean): void;
    startScriptConversation(p0: boolean, p1: boolean, p2: boolean, p3: boolean): void;
    triggerMusicEvent(eventName: string): boolean;
    requestMissionAudioBank(p0: string, p1: boolean): boolean;
    getSoundIdFromNetworkId(netId: number): number;
    releasedNamedScriptAudioBank(audioBank: string): void;
    playSound(soundId: number, audioName: string, audioRef: string, p3: boolean, p4: object, p5: boolean): void;
    pauseScriptedConversation(p0: boolean): void;
    setInitialPlayerStation(radioStation: string): void;
    playSynchronizedAudioEvent8(p0: object): boolean;
    findRadioStationIndex(station: number): number;
    playSoundFromCoord(soundId: number,
        audioName: string,
        x: number,
        y: number,
        z: number,
        audioRef: string,
        p6: boolean,
        p7: object,
        p8: boolean): void;
    hintAmbientAudioBank(p0: object, p1: object): void;
    isAmbientSpeechPlaying(p0: MpPed | object): boolean;
    stopSynchronizedAudioEvent(p0: object): boolean;
    getSynchronizedAudioEventPositionThisFrame(p0: string, p1: MpEntity | object): void;
    addPedToConversation(p0: object, p1: object, p2: string): void;
    setAmbientZoneListState(p0: object, p1: boolean, p2: boolean): void;
    prepareAlarm(alarmName: string): boolean;
    interruptConversation(p0: object, p1: object, p2: object): void;
    stopAlarm(alarmName: string, toggle: boolean): void;
    stopSound(soundId: number): void;
    setRadioToStationIndex(radioStation: number): void;
    setEmitterRadioStation(emitterName: string, radioStation: string): void;
    setVariableOnSound(soundId: number, p1: object, p2: number): void;
    playMissionCompleteAudio(audioName: string): void;
    unlockMissionNewsStory(newsStory: number): void;
    getRadioStationName(radioStation: number): string;
    setRadioTrack(radioStation: string, radioTrack: string): void;
    isAudioSceneActive(scene: string): boolean;
    setMicrophonePosition(p0: boolean,
        x1: number,
        y1: number,
        z1: number,
        x2: number,
        y2: number,
        z2: number,
        x3: number,
        y3: number,
        z3: number): void;
    stopCurrentPlayerAmbientSpeech(p0: MpPed | object): void;
    setAudioFlag(flagName: string, toggle: boolean): void;
    playPain(painId: number, p1: number, p2: number): void;
    getPlayerHeadsetSoundAlternate(p0: string, p1: number): void;
    setAmbientZoneState(p0: object, p1: boolean, p2: boolean): void;
    setMobilePhoneRadioState(state: boolean): void;
    setRadioAutoUnfreeze(p0: boolean): void;
    addLineToConversation(p0: object,
        p1: object,
        p2: object,
        p3: object,
        p4: object,
        p5: boolean,
        p6: boolean,
        p7: boolean,
        p8: boolean,
        p9: object,
        p10: boolean,
        p11: boolean,
        p12: boolean): void;
    setRadioToStationName(stationName: string): void;
    registerScriptWithAudio(p0: object): void;
    prepareSynchronizedAudioEvent(p0: string, p1: object): void;
    setAnimalMood(p0: object, p1: object): void;
    isScriptedSpeechPlaying(p0: object): boolean;
    playEndCreditsMusic(play: boolean): void;
    stopScriptedConversation(p0: boolean): void;
    stopAudioScene(scene: string): void;
    playPoliceReport(name: string, p1: number): void;
    playSoundFromEntity(soundId: number,
        audioName: string,
        entity: MpEntity | object,
        audioRef: string,
        p4: boolean,
        p5: object): void;
    setPlayerAngry(playerPed: MpPed | object, disabled: boolean): void;
    playStreamFromObject(object: MpObject | object): void;
    playAmbientSpeechAtCoords(p0: string, p1: string, p2: number, p3: number, p4: number, p5: string): void;
    setAudioSceneVariable(p0: object, p1: object, p2: number): void;
    overrideUnderwaterStream(p0: object, p1: boolean): void;
    setAmbientZoneListStatePersistent(ambientZone: string, p1: boolean, p2: boolean): void;
    resetPedAudioFlags(p0: object): void;
    setFrontendRadioActive(active: boolean): void;
    playPedRingtone(ringtoneName: string, ped: MpPed | object, p2: boolean): void;
    hintScriptAudioBank(p0: object, p1: object): void;
    unfreezeRadioStation(radioStation: string): void;
    hasSoundFinished(soundId: number): boolean;
    requestAmbientAudioBank(p0: string, p1: boolean): boolean;
}