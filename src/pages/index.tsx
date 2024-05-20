import MainLanding from '@/components/modules/landingModule/Main';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
function Home() {
  return <MainLanding />;
}

export default Home;

export async function getServerSideProps({ locale }: { locale: string }) {
  try {
    return {
      props: {
        ...(await serverSideTranslations(locale, [])),
        title: 'AiDextrading - web',
      },
    };
  } catch (error) {
    return {
      props: {
        ...(await serverSideTranslations(locale, [])),
      },
    };
  }
}
