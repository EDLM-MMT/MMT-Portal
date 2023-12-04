import degreePathwaysData from "@/data/service_member/degreePathways.json";

export default function handler(req, res) {
  const degreeAgreementsId =  req.query;

  const match = degreePathwaysData.degreePathways.find(
    (course) => course.id == parseInt(Object.values(degreeAgreementsId))
  );
    
  if (!match) {
    res.status(404).json({
      error: 'Degree Pathway not found',
    });
    return;
  }

  res.status(200).json(match || {});
} 