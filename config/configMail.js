const nodemailer = require("nodemailer");
const sendingMail = async (listUser) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "bang.tran@savvycomsoftware.com",
      pass: process.env.PASSWORD,
    },
  });
  const content = `
  Chào mừng bạn tới Flyer!
  Chỉ với vài bước đơn giản bạn sẽ gia nhập vũ trụ Flyer để giải cứu
  hành tinh của Bingo cùng bạn bè của mình
  1. Click tại đường link sau
  https://exam.flyer.vn/join-a-class/#${Math.random().toFixed(5)}
  2. Tạo tài khoản tại Flyer
  3. Khám phá những thử thách thú vị và thách đấu bạn bè tại FLYER
  Cảm ơn bạn, chúc bạn sẽ có 1 hành trình đầy thú vị và rèn luyện được
  những kỹ năng tiếng Anh thật suất sắc cùng Flyer nhé!
  `;
  const mailOptions = {
    from: "bang.tran@savvycomsoftware.com",
    to: listUser,
    subject: "Teacher Invites Student Join Class!",
    text: content,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      throw error;
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};
module.exports = sendingMail;
