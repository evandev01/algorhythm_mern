module.exports = function (sequelize, DataTypes) {
  const Song = sequelize.define('Song', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    songName: DataTypes.STRING,
    artistName: DataTypes.STRING,
    albumName: DataTypes.STRING,
    mp3: DataTypes.STRING,
    albumArt: DataTypes.STRING
  });

  Song.associate = model => {
    Song.belongsTo(model.Playlist, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Song;
};
