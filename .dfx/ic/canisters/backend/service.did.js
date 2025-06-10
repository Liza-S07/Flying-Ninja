export const idlFactory = ({ IDL }) => {
  const LeaderboardEntry = IDL.Record({ 'name' : IDL.Text, 'score' : IDL.Nat });
  return IDL.Service({
    'add_leaderboard_entry' : IDL.Func(
        [IDL.Text, IDL.Nat],
        [IDL.Vec(LeaderboardEntry)],
        [],
      ),
    'get_leaderboard' : IDL.Func([], [IDL.Vec(LeaderboardEntry)], ['query']),
    'get_randomness' : IDL.Func([], [IDL.Vec(IDL.Nat8)], []),
    'is_high_score' : IDL.Func([IDL.Nat], [IDL.Bool], ['query']),
  });
};
export const init = ({ IDL }) => { return []; };
