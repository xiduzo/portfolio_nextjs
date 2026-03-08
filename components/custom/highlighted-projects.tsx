import Link from 'next/link';
import { WobbleCard } from '@/components/aceternity/wobble-card';
import { Image } from '@/components/custom/image';
import { Text } from '@/components/custom/text';
import { Iphone15Pro } from '../magic-ui/iphone-15-pro';

export function HighlightedProjects() {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-6 gap-4 mx-auto w-full'>
      <Link href='/project/glosario' className='col-span-6 xl:col-span-3'>
        <WobbleCard containerClassName='h-full bg-violet-300 dark:bg-violet-900 min-h-[500px] group'>
          <Text
            variant='subheading'
            size='sm'
            motion='none'
            className='text-violet-950 dark:text-violet-100'
          >
            Glosario
          </Text>
          <Text
            size='sm'
            motion='none'
            className='text-violet-950 dark:text-violet-50'
          >
            A collaborative glossary for everyone
          </Text>
          {/* IMAGE HINT: Add a screenshot of the glossary overview or term detail
              as public/glosario/glossary-overview.png — ideally ~1280×800 */}
          <div className='absolute top-[60%] filter grayscale group-hover:filter-none -z-10 transition-all duration-300'>
            <Image
              width={1280}
              height={800}
              src='/glosario/glossary-overview.png'
              alt='Glosario glossary overview'
            />
          </div>
        </WobbleCard>
      </Link>
      <Link href='/project/fissa' className='col-span-6 xl:col-span-3'>
        <WobbleCard containerClassName='h-full bg-pink-300 dark:bg-pink-900 min-h-[500px] group'>
          <Text
            variant='subheading'
            size='sm'
            motion='none'
            className='text-pink-950 dark:text-pink-100'
          >
            Fissa
          </Text>
          <Text
            size='sm'
            motion='none'
            className='text-pink-950 dark:text-pink-50'
          >
            Not only one person should decide what is playing at a party
          </Text>
          <div className='absolute top-[50%] right-[5%] filter grayscale group-hover:filter-none -z-10 transition-all duration-300'>
            <Iphone15Pro
              src='/fissa/pinkey.svg'
              alt='Fissa demo image'
              className='w-full'
            />
          </div>
        </WobbleCard>
      </Link>
      <Link href='/project/microflow' className='col-span-6'>
        <WobbleCard containerClassName='h-full bg-orange-300 dark:bg-orange-900 min-h-[500px] group'>
          <div className='lg:max-w-sm'>
            <Text
              variant='subheading'
              size='sm'
              motion='none'
              className='text-orange-950 dark:text-orange-100'
            >
              Microflow
            </Text>
            <Text
              size='sm'
              motion='none'
              className='text-orange-950 dark:text-orange-50'
            >
              Microcontrollers made easy.
            </Text>
          </div>
          <div className='absolute xl:left-[30%] xl:top-[10%] top-[40%] filter grayscale group-hover:filter-none -z-10 transition-all duration-300'>
            <Image
              src='/microflow/microflow-studio.png'
              width={1920}
              height={1080}
              alt='Microflow demo image'
            />
          </div>
        </WobbleCard>
      </Link>
    </div>
  );
}
