const getPegawai = async (req, res) => {
  try {
    isiData = [
      {
        nip: "11",
        nama: "Lala",
      },
      {
        nip: "12",
        nama: "Lili",
      },
    ];

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
