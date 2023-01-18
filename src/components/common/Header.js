import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import logo from '/public/logo192.png';
import useStore from '@/store/store';
import UserMenu from '@/components/menus/UserMenu';


const menuItems = [
  {
    label: 'My Transcripts',
    path: '/serviceMember/transcripts',
  },
  {
    label: 'My Inquiries',
    path: '/serviceMember/inquiries',
  },
  {
    label: 'My Degree Agreements',
    path: '/serviceMember/degreeAgreements',
  },
  {
    label: 'My Degree Pathways',
    path: '/serviceMember/degreePathways',
  },
  // {
  //   label: 'Career Plans',
  //   path: '/serviceMember/careerPlans',
  // },
  {
    label: 'Quick Links',
    path: '/quickLinks',
  },
];

function Button({ data }) {
  const router = useRouter();
  if (data.path === router?.asPath) {
    return (
      <Link href={data.path}>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <button className='px-1 font-bold text-white border-b-2 border-white-800 hover:white-gray-900'>
          {data.label}
        </button>
      </Link>
    );
  }
  return (
    <Link href={data.path}>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <button className='transition-all duration-100 px-2 border-b-2 border-transparent text-lg text-white hover:text-gray-300'>
        {data.label}
      </button>
    </Link>
  );
}

export default function Header() {
  const router = useRouter();
  const user = useStore((state) => state.userData);
  const {userData, removeUserData} = useStore((state) => state);
  const handleLogout = () => {
    router.push('/');
    removeUserData();
  };
  return (
    <header className={'bg-dod-700 w-full shadow z-50'}>
      <nav
        className={'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'}
        aria-label={'Top'}
      >
        <div className='w-full py-4 inline-flex items-center justify-between z-50'>
          <div className={'flex items-center justify-start gap-2'}>
            <Link href={'/dashboard'} passHref>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <button
                title='home'
                id={'homepage-button'}
                className={'cursor-pointer'}
              >
                <Image src={logo} alt={'home'} height={'60'} width={'60'} />
              </button>
            </Link>
            
            {user && menuItems.map((item) => {
                return <Button key={item.label} data={item} />;
            })}
          </div>
            <div className='space-x-4'>
              {!user? (
              
              <Link href={'/register'} passHref>
                <button className='disabled:hidden bg-dod-300/40 py-2 px-4 rounded inline-block text-white hover:opacity-90 hover:shadow transform transition-all duration-100 ease-in-out font-semibold'>
                  Sign up
                </button>
              </Link>
              ):(
                <UserMenu logout={handleLogout} userData={user}/>
              )}
            </div>
         
        </div>
      </nav>
    </header>
  );
}
