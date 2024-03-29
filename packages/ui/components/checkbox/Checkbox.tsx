'use client';

import { useController, Control } from 'react-hook-form';
import { clsx } from '@near/clsx';
import { ReactNode } from 'react';

interface CheckboxCommonProps {
  isDisabled?: boolean;
  isResponsive?: boolean;
}

interface CheckboxTextProps extends CheckboxCommonProps {
  label?: ReactNode;
  labelClassName?: string;
}

interface CheckboxSubTextProps extends CheckboxCommonProps {
  multipleLabel?: ReactNode;
  multipleLabelClassName?: string;
}

interface CheckboxProps extends CheckboxCommonProps {
  name: string;
  type?: string;
  labelType?: 'notext' | 'singletext' | 'multipletext';
  control?: Control;
}

const CheckboxTextStyle =
  'mobile:text-sm mobile:leading-tight tablet:text-base tablet:leading-normal desktop:text-base desktop:leading-normal';

function CheckboxText({
  label,
  isDisabled,
  labelClassName,
  isResponsive = true,
}: CheckboxTextProps) {
  return (
    <span
      className={clsx(
        'font-normal',
        `${!isDisabled ? 'text-[#333333]' : 'text-[#C6C6C6]'}`,
        isResponsive ? CheckboxTextStyle : 'text-base leading-normal',
        labelClassName,
      )}
    >
      {label}
    </span>
  );
}

const CheckboxSubTextStyle =
  'mobile:text-xs mobile:leading-none tablet:text-sm tablet:font-normal tablet:leading-tight desktop:text-sm desktop:font-normal desktop:leading-tight';

function CheckboxSubText({
  multipleLabel,
  isDisabled,
  multipleLabelClassName,
  isResponsive = true,
}: CheckboxSubTextProps) {
  return (
    <span
      className={clsx(
        `${
          isResponsive
            ? CheckboxSubTextStyle
            : 'text-sm font-normal leading-tight'
        }`,
        `${!isDisabled ? 'text-[#333333]' : 'text-[#C6C6C6]'}`,
        multipleLabelClassName,
      )}
    >
      {multipleLabel}
    </span>
  );
}

/**
 * @author `송용수`
 *
 * @desc Checkbox UI 컴포넌트. `react-hook-form` 라이브러리의 `useController`를 사용하여 `name`, `control`을 받아옴.
 *
 * @param name
 * — (`string`)
 * `react-hook-form` 관련 props (필수)
 *
 * @param type
 * — (`string`)
 * `input` 태그의 `type` 속성 값. 기본값은 `'checkbox'`
 *
 * @param control
 * — (`Control`)
 * `react-hook-form` 관련 props
 *
 * @param isDisabled
 * — (`boolean`)
 * `input` 태그의 `disabled` 속성 값. 기본값은 `false`
 *
 * @param isResponsive
 * — (`boolean`)
 * `input` 태그의 반응형 여부를 결정하는 `responsive` 속성 값. 기본값은 `true`
 *
 * @param labelType
 * — (`'notext' | 'singletext' | 'multipletext'`)
 * 체크박스의 레이블 타입. 기본값은 `'notext'`
 *
 * @param label
 * — (`ReactNode`)
 * 체크박스의 레이블
 *
 * @param labelClassName
 * — (`string`)
 * 체크박스의 레이블에 적용할 className
 *
 * @param multipleLabel
 * — (`ReactNode`)
 * 체크박스의 레이블 타입이 `'multipletext'`일 때, 레이블 아래에 들어갈 서브 레이블
 *
 * @param multipleLabelClassName
 * — (`string`)
 * 체크박스의 `labelType`이 `'multipletext'`일 때, 서브 레이블에 적용할 className
 */
function CheckBox({
  type = 'checkbox',
  name,
  control,
  isDisabled = false,
  isResponsive = true,
  labelType = 'notext',
  label,
  labelClassName,
  multipleLabel,
  multipleLabelClassName,
}: CheckboxProps & CheckboxTextProps & CheckboxSubTextProps) {
  const { field } = useController({
    name,
    control,
  });

  return (
    <div
      className={clsx(
        'flex flex-col',
        `${
          isResponsive
            ? 'mobile:gap-[0.2331rem] tablet:gap-1 desktop:gap-1'
            : 'gap-1'
        }`,
      )}
    >
      <div
        className={clsx(
          'flex items-center',
          isResponsive ? 'mobile:gap-2 tablet:gap-4 desktop:gap-4' : 'gap-4',
        )}
      >
        <label
          className={clsx(
            `${isDisabled ? 'cursor-not-allowed' : 'cursor-pointer'}`,
          )}
        >
          <input
            type={type}
            className='hidden'
            disabled={isDisabled}
            name={field.name}
            value={field.value}
            checked={!!field.value}
            onChange={field.onChange}
            onBlur={field.onBlur}
          />
          <div
            className={clsx(
              'rounded-sm flex items-center justify-center',
              `${
                isResponsive
                  ? 'mobile:w-4 mobile:h-4 tablet:w-5 tablet:h-5 desktop:w-5 desktop:h-5'
                  : 'w-5 h-5'
              }`,
              ` ${
                !!field.value
                  ? isDisabled
                    ? 'bg-[#C6C6C6]'
                    : 'bg-theme-main'
                  : isDisabled
                  ? 'bg-white border-[0.0625rem] border-[#C6C6C6]'
                  : 'bg-white border-[0.0625rem] border-[#797979]'
              }`,
            )}
          >
            {!!field.value ? (
              <div
                className={clsx(
                  isResponsive
                    ? 'mobile:w-[0.5625rem] mobile:h-2 tablet:w-3 tablet:h-[0.625rem] desktop:w-3 desktop:h-[0.625rem]'
                    : 'w-3 h-[0.625rem]',
                )}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='100%'
                  height='100%'
                  viewBox='0 0 9 9'
                  fill='none'
                >
                  <path
                    d='M0.771484 4.42318L3.30482 7.58984L8.10482 1.58984'
                    stroke='white'
                    strokeWidth='1.22027'
                    strokeLinecap='round'
                  />
                </svg>
              </div>
            ) : null}
          </div>
        </label>
        {labelType !== 'notext' ? (
          <CheckboxText
            isDisabled={isDisabled}
            labelClassName={labelClassName}
            label={label}
            isResponsive={isResponsive}
          />
        ) : null}
      </div>
      {labelType === 'multipletext' ? (
        <div
          className={clsx(
            `${isResponsive ? 'mobile:pl-6 tablet:pl-9 desktop:pl-9' : 'pl-9'}`,
          )}
        >
          <CheckboxSubText
            isDisabled={isDisabled}
            multipleLabel={multipleLabel}
            multipleLabelClassName={multipleLabelClassName}
          />
        </div>
      ) : null}
    </div>
  );
}

export default CheckBox;
