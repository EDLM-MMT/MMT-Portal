import degreeAgreements from '@/data/service_member/degreeAgreements.json';

export default function handler(req, res) {
    console.log("here", degreeAgreements);
    return res.status(200).json(degreeAgreements);
}
