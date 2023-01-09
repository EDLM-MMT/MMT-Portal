import serviceMemberData from '@/data/service_member/serviceMemberData.json';

export default function handler(req, res) {
  const { username, password } = req.body;
  if (username.toLowerCase().includes('servicemember') && password.includes('password')) {
    return res.status(200).json(serviceMemberData);
  }
    return res.status(401).json()
}
