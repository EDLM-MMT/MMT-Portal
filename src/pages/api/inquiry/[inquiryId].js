import inquiryData from '@/data/service_member/inquiries.json';

export default function handler(req, res) {
  const inquiryid =  req.query.id;

  const match = inquiryData.find(
    (inquiry) => inquiry.id == inquiryid
  );

    
  if (!match) {
    res.status(404).json({
      error: 'Inquiry not found',
    });
    return;
  }

  res.status(200).json(match || {});
} 