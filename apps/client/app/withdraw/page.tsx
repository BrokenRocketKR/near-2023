'use client';

import CheckBox from 'ui/components/checkbox/Checkbox';
import { useForm } from 'react-hook-form';
import { ButtonXL } from 'ui/components/buttons/Button';
import { Modal } from 'antd';
import { useState } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import FooterShadowBox from 'ui/components/footer/FooterShadowBox';

interface FormValues {}

const Withdraw = () => {
  const supabase = createClientComponentClient();
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {},
    mode: 'onChange',
  });

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const onClickWithdraw = async (
    userData: FormValues,
    e: React.MouseEvent<HTMLButtonElement>,
  ) => {
    e.preventDefault();
    console.log(userData);

    const {
      data: { user },
    } = await supabase.auth.getUser();
    console.log(user);

    let { data, error } = await supabase.auth.admin.deleteUser(
      'ee4cbbee-b099-47ad-bdd4-131e601fbf9d',
    );

    if (error instanceof Error) {
      console.log(error);
    }
    if (data) {
      console.log(data);
    }

    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div></div>
      <form onSubmit={handleSubmit(onClickWithdraw)}>
        <div
          className='mobile:h-[3.125rem] mobile:w-[28.75rem] mobile:m-auto mobile:flex mobile:justify-center mobile:mt-[8.6875rem] mobile:font-bold mobile:text-[1.25rem] mobile:border-b-2
                                tablet:flex tablet:justify-start tablet:pl-[77px] tablet:w-[740px] mobile:h-[50px]
                                desktop:w-[1408px]
                '
        >
          회원 탈퇴
        </div>
        <div
          className='mobile:h-[16rem] mobile:mt-[6.4375rem] mobile:grid mobile:content-between mobile:mb-[279px]
                                tablet:h-[404px] tablet:mt-[84px] tablet:pt-[32px]
                                desktop:h-[662px] desktop:mt-[171px] desktop:pt-[32px] 
                    '
        >
          <div className='mobile:m-auto moible:flex mobile:justify-center mobile:w-[409px]'>
            <div className='mobile:font-bold mobile:text-[1.5rem] mobile:flex justify-center mobile:mb-[24px]'>
              NEAR 회원에서 탈퇴하시나요?
            </div>
            <ul className='list-disc mobile:text-[13px] mobile:ml-[15px]'>
              <li className=' mobile:text-indigo-900 mobile:font-bold'>
                {' '}
                NEAR에서 임시 보호와 입양 절차를 진행할 수 없습니다.
              </li>
              <ul className='list-disc mobile:text-[12px] mobile:ml-[20px] mobile:'>
                <li>
                  {' '}
                  신청하신 임시 보호 절차와 입양 절차가 있다면 자동으로
                  취소됩니다.
                </li>
                <li>
                  {' '}
                  NEAR 연계 임시 보호를 진행 중인 경우 임보 기간 종료 시까지
                  회원 탈퇴를 할 수 없습니다.
                </li>
              </ul>
              <li className=' mobile:text-indigo-900 mobile:mt-[35px] mobile:font-bold'>
                {' '}
                회원님의 작성하신 글은 모두 삭제됩니다.
              </li>
            </ul>
          </div>
          <div className='mobile:flex justify-center'>
            <CheckBox
              label=' 안내 사항을 모두 확인하였으며, 이에 동의합니다.'
              control={control}
              name={'withdraw'}
              labelType='singletext'
            />
          </div>
        </div>
        <div>
          <FooterShadowBox>
            <ButtonXL type='submit'>탈퇴하기</ButtonXL>
          </FooterShadowBox>
          <Modal width={480} open={isModalOpen} footer={null}>
            <div className='mobile:flex flex-col mobile:items-center'>
              <p className='mobile:my-[50px] mobile:font-bold'>
                정상적으로 회원탈퇴가 진행되었습니다.
              </p>
              <ButtonXL onClick={handleOk}>확인</ButtonXL>
            </div>
          </Modal>
        </div>
      </form>
    </div>
  );
};

export default Withdraw;
