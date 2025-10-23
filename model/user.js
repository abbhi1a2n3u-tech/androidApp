import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  emailVerified: { type: Boolean, default: false },
  OTP: { type: String },
  Money: { type: Number, default: 0 },
  TournamentsPlayed: { type: Number, default: 0 },
  TournamentsWon: { type: Number, default: 0 },
  player:{ type: Number, required: true}, // player or admin

  // Array of tournaments the user has played
  Tournaments: [
    {
      tournamentId: { type: mongoose.Schema.Types.ObjectId, ref: "Tournament" },
      position: { type: Number, default: 0 },
      kills: { type: Number, default: 0 }, // 🟢 kills for that specific tournament
    },
  ],

  // Array of Room IDs the user has joined
    RoomsJoined: [
        { 
            roomID: {type: string, },
            joinedAt: { type: Date, default: Date.now },
            roomPassword: { type: String },

        }
    ],

  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("User", userSchema);
