import { Section } from '@/components/custom/section';
import { Text } from '@/components/custom/text';

export default function Page() {
  return (
    <>
      <Section>
        <Text as='h1' variant='heading'>
          Posts from 2025
        </Text>
        <Text
          size='sm'
          as='small'
          className="text-muted-foreground before:content-['//'] before:mr-2"
        >
          We don&rsquo;t talk about 2025
        </Text>
        <Text className='mt-24 text-muted-foreground italic'>
          Nothing to see here. The posts are still trapped somewhere between my
          brain and the keyboard. They will be released when ready.
        </Text>
        <Text size='sm' className='text-muted-foreground'>
          (They are not ready.)
        </Text>
      </Section>
    </>
  );
}
