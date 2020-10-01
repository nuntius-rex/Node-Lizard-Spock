
const dbConnection = require('../libs/config/database');

queries = {
    insert_player_stat: `INSERT INTO game_stats SET player=?, outcome=?, gesture=? `,
    read_player_win: `SELECT count(outcome) as win FROM game_stats WHERE outcome = 'Win' AND player='Player'`,
    read_player_lose: `SELECT count(outcome) as lose FROM game_stats WHERE outcome = 'Lose' AND player='Player'`,
    read_player_draw: `SELECT count(outcome) as draw FROM game_stats WHERE outcome = 'Draw' AND player='Player'`,
    read_player_gestures: `SELECT count(gesture) as gesture_count, gesture FROM game_stats
    WHERE player=? GROUP BY gesture ORDER BY gesture_count DESC `
}


module.exports = class statsModel {
  async savePlayerStat(entity) {
    let con = await dbConnection();
    try {
      await con.query("START TRANSACTION");
      let insert_player_stat = await con.query(
        queries.insert_player_stat,
        [entity.player, entity.outcome, entity.gesture]
      );
      await con.query("COMMIT");
      entity.id = insert_player_stat.insertId;
      return entity;
    } catch (ex) {
      await con.query("ROLLBACK");
      console.log(ex);
      throw ex;
    } finally {
      await con.release();
      await con.destroy();
    }
  }
  async readPlayerWin() {
    let con = await dbConnection();
    try {
      await con.query("START TRANSACTION");
      //console.log(queries.read_player_win);
      let read_player_win = await con.query(queries.read_player_win);
      //console.log(read_player_win);
      await con.query("COMMIT");
      read_player_win = JSON.parse(JSON.stringify(read_player_win));
      //console.log(read_player_win);
      return read_player_win;
    } catch (ex) {
      console.log(ex);
      throw ex;
    } finally {
      await con.release();
      await con.destroy();
    }
  }
  async readPlayerLose() {
    let con = await dbConnection();
    try {
      await con.query("START TRANSACTION");
      let read_player_lose = await con.query(queries.read_player_lose);
      await con.query("COMMIT");
      read_player_lose = JSON.parse(JSON.stringify(read_player_lose));
      return read_player_lose;
    } catch (ex) {
      console.log(ex);
      throw ex;
    } finally {
      await con.release();
      await con.destroy();
    }
  }
  async readPlayerDraw() {
    let con = await dbConnection();
    try {
      await con.query("START TRANSACTION");
      let read_player_draw = await con.query(queries.read_player_draw);
      await con.query("COMMIT");
      read_player_draw = JSON.parse(JSON.stringify(read_player_draw));
      return read_player_draw;
    } catch (ex) {
      console.log(ex);
      throw ex;
    } finally {
      await con.release();
      await con.destroy();
    }
  }
  async readPlayerGestures(entity) {
    let con = await dbConnection();
    try {
      await con.query("START TRANSACTION");
      let read_player_gestures = await con.query(
        queries.read_player_gestures,[entity.player]
      );
      await con.query("COMMIT");
      read_player_gestures = JSON.parse(JSON.stringify(read_player_gestures));
      return read_player_gestures;
    } catch (ex) {
      console.log(ex);
      throw ex;
    } finally {
      await con.release();
      await con.destroy();
    }
  }
}
