export default function handler(req, res) {
  const assignments = [
    { id: 1, title: "数学作业", deadline: "2025-04-20" },
    { id: 2, title: "英语作文", deadline: "2025-04-22" }
  ];

  res.status(200).json({
    code: 0,
    data: assignments
  });
}
