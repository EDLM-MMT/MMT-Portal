import counselingData from "@/data/service_member/careerCounseling.json";

export default function handler(req, res) {
  const counselingid =  req.query;
  //console.log("Just checking whats here",counselingData);

  const match = counselingData.counseling.find(
    (course) => course.id == parseInt(Object.values(counselingid))
  );

    
  if (!match) {
    res.status(404).json({
      error: 'counselingData not found',
    });
    return;
  }



  res.status(200).json(match || {});
} 