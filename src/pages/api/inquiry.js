import inquiries from "@/data/service_member/inquiries.json"

export default function handler(req, res) {
    console.log("here", inquiries);
    return res.status(200).json(inquiries);
}
