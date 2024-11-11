const getPegawai = async (req, res) => {
  try {
    let isiData = [];
    if (
      process.env.DB_NAME == "dbtes" &&
      process.env.DB_USER == "root" &&
      process.env.DB_PASSWORD == "super" &&
      process.env.DB_HOST == "localhost"
    ) {
      //console.log("benar");
      isiData = [
        {
          nip: "111",
          nama: "jati",
        },
        {
          nip: "222",
          nama: "lala",
        },
      ];
    } else {
      //console.log("salah");
      isiData = [];
    }
    res.status(200).json({
      error: "false",
      code: "00",
      message: "get data pegawai success",
      data: isiData,
    });
  } catch (error) {
    res.status(500).json({
      error: "true",
      code: "01",
      message: "error server",
      eror: error,
    });
  }
};

module.exports = {
  getPegawai,
};
