import degreePathways from '@/data/service_member/degreePathways.json';

export default function handler(req, res) {
    return res.status(200).json(degreePathways);
}
