import inquiries from "@/data/service_member/inquiries.json"

export default function handler(req, res) {
    return res.status(200).json(inquiries);
}
