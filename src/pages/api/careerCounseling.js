import careerCounseling from '@/data/service_member/careerCounseling.json';

export default function handler(req, res) {
    // console.log("here", careerCounseling);
    return res.status(200).json(careerCounseling);
}
