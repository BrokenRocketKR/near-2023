import { ModifyPet, VerticalProfile } from 'ui';
import { DummyPetProfile, DummyProfile } from './dummy';

interface ProfileBoxSectionProps {
  href: string;
  src: '/images/profile/img_profile_default.png';
  level: string;
  name: string;
  email: string;
}
function ProfileBoxSection({ ...props }: ProfileBoxSectionProps) {
  const petData = DummyPetProfile;
  const { src, level = 1, name, email } = props;
  return (
    <section className='flex flex-col gap-12 items-center justify-center rounded-none mobile:rounded-none tablet:rounded-[1.25rem] desktop:rounded-[1.25rem] bg-transparent mobile:bg-transparent p-0 mobile:p-0 tablet:p-6 tablet:pb-[4.5rem] tablet:bg-gray-3 desktop:p-6 desktop:pb-[4.5rem] desktop:bg-gray-3'>
      <VerticalProfile
        href={`/profile/personalchange`}
        src={src}
        level={Number(level)}
        name={name}
        email={email}
      />
      {/* <AddPet backgroundColor='white' href={'/profile/pet'} /> */}
      <ModifyPet
        href={`/profile/pet`}
        name={petData.name}
        src={'/images/profile/img_test.jpg'}
        gender={petData.gender}
        age={petData.age}
      />
    </section>
  );
}

export default ProfileBoxSection;
