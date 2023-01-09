import DefaultLayout from '@/components/layouts/DefaultLayout';
import ServiceMemberDashboard from '@/pages/dashboard/serviceMember/serviceMemberDashboard'
import useStore from '@/store/store';

export default function Dashboard() {
  const userData = useStore((state) => state.userData);

  return (
    <DefaultLayout>
      {userData?.role === 'service_member' && <ServiceMemberDashboard />}
    </DefaultLayout>
  );
}
