/// <reference path="../index.d.ts" />

declare interface MpGameStats {
    statSlotIsLoaded(p0: object): boolean;
    playstatsFriendActivity(p0: object, p1: object): void;
    statGetBoolMasked(statName: number | string, mask: number, p2: number): boolean;
    leaderboardsGetNumberOfColumns(p0: object, p1: object): object;
    statGetBool(statHash: number | string, outValue: boolean, p2: object): boolean;
    playstatsShopItem(p0: object, p1: object, p2: object, p3: object, p4: object): void;
    statSetGxtLabel(statName: number | string, value: string, save: boolean): boolean;
    statGetUserId(p0: object): string;
    statSetDate(statName: number | string,
        value: {
            year: number;
            month: number;
            day: number;
            hour: number;
            minute: number;
            second: number;
            milisecond: number;
        },
        numFields: number,
        save): void;
    statGetNumberOfSeconds(statName: number | string): number;
    leaderboardsReadSuccessful(p0: object, p1: object, p2: object): boolean;
    playstatsClothChange(p0: object, p1: object, p2: object, p3: object, p4: object): void;
    statGetPos(p0: object, p1: object, p2: object, p3: object, p4: object): boolean;
    playstatsAwardXp(p0: object, p1: object, p2: object): void;
    statSetFloat(statName: number | string, value: number, save: boolean): boolean;
    statDeleteSlot(p0: object): object;
    statSetBool(statName: number | string, value: boolean, save: boolean): boolean;
    statGetLicensePlate(statName: number | string): string;
    statSetBoolMasked(statName: number | string, value: boolean, mask: number, save: boolean): boolean;
    leaderboards2ReadByRadius(p0: object, p1: object, p2: object): boolean;
    playstatsCheatApplied(cheat: string): void;
    statGetMaskedInt(p0: object, p1: object, p2: object, p3: object, p4: object): boolean;
    statSetProfileSetting(profileSetting: number, value: number): void;
    playstatsOddjobDone(p0: object, p1: object, p2: object): void;
    statSetLicensePlate(statName: number | string, str: string): boolean;
    statGetNumberOfMinutes(statName: number | string): number;
    statGetInt(statHash: number | string, outValue: number, p2: number): number;
    statSetMaskedInt(statName: number | string, p1: object, p2: object, p3: number, save: boolean): boolean;
    playstatsMissionOver(p0: object, p1: object, p2: object, p3: boolean, p4: boolean, p5: boolean): void;
    leaderboardsReadClear(p0: object, p1: object, p2: object): object;
    leaderboards2ReadByScoreInt(p0: object, p1: object, p2: object): boolean;
    statGetDate(statHash: number | string, p1: object, p2: object, p3: object): boolean;
    statSetUserId(statName: number | string, value: string, save: boolean): boolean;
    leaderboardsGetCacheDataRow(p0: object, p1: object, p2: object): boolean;
    leaderboards2ReadFriendsByRow(p0: object, p1: object, p2: object, p3: boolean, p4: object, p5: object): boolean;
    playstatsNpcInvite(p0: object): void;
    statIncrement(statName: number | string, value: number): void;
    playstatsRaceCheckpoint(p0: object, p1: object, p2: object, p3: object, p4: object): void;
    leaderboardsGetCacheExists(p0: object): boolean;
    statLoadPending(p0: object): boolean;
    statLoad(p0: number): boolean;
    statSetString(statName: number | string, value: string, save: boolean): boolean;
    leaderboards2ReadByRow(p0: object, p1: object, p2: object, p3: object, p4: object, p5: object, p6: object): boolean;
    leaderboardsReadPending(p0: object, p1: object, p2: object): boolean;
    leaderboards2WriteData(p0: object): boolean;
    statSetInt(statName: number | string, value: number, save: boolean): boolean;
    leaderboardsCacheDataRow(p0: object): boolean;
    leaderboards2ReadByRank(p0: object, p1: object, p2: object): boolean;
    playstatsPropChange(p0: object, p1: object, p2: object, p3: object): void;
    playstatsMatchStarted(p0: object, p1: object, p2: object, p3: object, p4: object, p5: object, p6: object): void;
    leaderboardsGetColumnType(p0: object, p1: object, p2: object): object;
    playstatsMissionStarted(p0: object, p1: object, p2: object, p3: boolean): void;
    statSetCurrentPosixTime(statName: number | string, p1: boolean): boolean;
    leaderboards2ReadByHandle(p0: object, p1: object): boolean;
    leaderboardsGetColumnId(p0: object, p1: object, p2: object): object;
    playstatsRankUp(p0: object): void;
    playstatsMissionCheckpoint(p0: object, p1: object, p2: object, p3: object): void;
    statGetFloat(statHash: number | string, outValue: number, p2: object): number;
    statSetPos(statName: number | string, x: number, y: number, z: number, save: boolean): boolean;
    playstatsWebsiteVisited(scaleformHash: number | string, p1: number): void;
    statSave(p0: number, p1: boolean, p2: number): boolean;
    statGetNumberOfDays(statName: number | string): number;
    statGetString(statHash: number | string, p1: number): string;
    leaderboards2ReadByScoreFloat(p0: object, p1: number, p2: object): boolean;
    statClearSlotForReload(statSlot: number): object;
    leaderboardsGetCacheTime(p0: object): object;
    statGetNumberOfHours(statName: number | string): number;
}