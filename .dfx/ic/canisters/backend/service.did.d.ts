import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface LeaderboardEntry { 'name' : string, 'score' : bigint }
export interface _SERVICE {
  'add_leaderboard_entry' : ActorMethod<
    [string, bigint],
    Array<LeaderboardEntry>
  >,
  'get_leaderboard' : ActorMethod<[], Array<LeaderboardEntry>>,
  'get_randomness' : ActorMethod<[], Uint8Array | number[]>,
  'is_high_score' : ActorMethod<[bigint], boolean>,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
