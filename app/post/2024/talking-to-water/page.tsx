import { Text } from '@/components/custom/text';
import { Section } from '@/components/custom/section';
import Link from 'next/link';
import { Image } from '@/components/custom/image';
import { CodeBlock } from '@/components/custom/code-block';
import Video from 'next-video';
import talkingToWaterVideo from '/videos/1080p.mov';
import { CallToAction } from '@/components/custom/call-to-action';
import { Hero } from '@/components/custom/hero';
import Alert from '@/components/custom/alert';
import { Quote } from '@/components/custom/quote';
import { ContainerIcon, GithubIcon } from 'lucide-react';
import { Technologies } from '@/components/custom/technologies';
import { TLDR } from '@/components/custom/tldr';

export default function Page() {
  return (
    <>
      <Hero
        title='Talking to water'
        subtitle='The art of the bodge'
        publishDate='Feb 21 2024'
        emoji='1F30A'
        readTime={10}
        className='bg-violet-300 dark:bg-violet-900'
      />
      <Technologies
        technologies={[
          'Whisper',
          'Hugging Face',
          'MQTT',
          'Docker',
          'PulseAudio',
        ]}
      />
      <TLDR
        lines={[
          'Students at the Master Digital Design wanted to make water respond to what people say. So we figured out how.',
          'The idea: capture speech, detect the emotion behind it, and send that feeling to a generative art installation.',
          'Getting it to run on any laptop — that was the real challenge. Enter Docker, PulseAudio, and the art of the bodge.',
        ]}
      />
      <Section>
        <Text>
          One of the things I like about my job at the{' '}
          <Link href='https://www.masterdigitaldesign.com/' target='_blank'>
            Master Digital Design
          </Link>{' '}
          is the odd requests I get from students from time to time.
        </Text>
        <Text>
          This time a group of students came to me asking if I could guide them
          on how they could <em>talk to water</em>.
        </Text>
        <Text>But how does one talk to water?</Text>
        <Text>And what does it even mean to talk to water?</Text>
      </Section>
      <Section>
        <Alert icon='Copyright' intent='info'>
          <Text>
            The concept and execution of the project were done by{' '}
            <Link href='https://www.linkedin.com/in/hieu/' target='_blank'>
              Hieu Nguyen
            </Link>
            ,{' '}
            <Link
              href='https://www.linkedin.com/in/bo-n%C3%A9meth-16960ab4'
              target='_blank'
            >
              Bo Németh
            </Link>
            ,{' '}
            <Link
              href='https://www.linkedin.com/in/ekta-gadekar'
              target='_blank'
            >
              Ekta Gadekar
            </Link>{' '}
            and{' '}
            <Link
              href='https://www.linkedin.com/in/viktoriya-marchenko/'
              target='_blank'
            >
              Viktoriya Marchenko
            </Link>
            . This article will go into some of the technical details of the
            project for which I provided guidance.
          </Text>
          <Text>
            I will keep it straightforward and easy to follow, leaving out
            jargon until going down the rabbit hole.
          </Text>
          <Text>
            For the non-technical aspects, I would like to refer you to the
            students themselves.
          </Text>
        </Alert>
      </Section>
      <Section variant='full' as='figure'>
        <Text variant='note' as='figcaption'>
          AuraMotions. Photo by{' '}
          <Link
            href='https://www.linkedin.com/in/bo-n%C3%A9meth-16960ab4'
            target='_blank'
          >
            Bo Németh
          </Link>
        </Text>
        <Image
          width={1920}
          height={1080}
          className='w-full'
          src='/talking-to-water/auramotions.jpeg'
          alt='AuraMotions installation'
        />
      </Section>
      <Section>
        <Quote
          link='https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882'
          cite='The students'
        >
          What we say to water can impact its crystals: positive words create
          intricate structures and negative words lead to collapse{' '}
          <em className='italic text-muted-foreground'>(Dr. Masaru Emoto)</em>
          .
          <br />
          <br /> AuraMotions is an art project that processes what we say to
          make different colours and patterns of water.
          <br />
          <br />
          It applies sentiment analysis technology to detect emotions from what
          we say. Then, through MQTT, data is sent to TouchDesigner to create
          captivating effects on water.
        </Quote>
      </Section>
      <Section>
        <Text as='h2' variant='subheading'>
          How does one talk to water?
        </Text>
        <Text>Well, that is an interesting question.</Text>
        <Text>
          Like how most of my answers start with{' '}
          <em>“I don’t know, but let’s figure it out together”</em>, this answer
          was no different.
        </Text>
        <Text>
          Luckily I am quite comfortable with{' '}
          <Link
            href='https://www.youtube.com/watch?v=lIFE7h3m40U'
            target='_blank'
          >
            the art of the bodge
          </Link>
          .
        </Text>
        <Text>
          Making prototypes work just enough to convey a concept. No need for
          perfection, fault-proof code or future-proof solutions.
        </Text>
      </Section>
      <Section>
        <Text as='h3' size='sm' variant='subheading'>
          So, what is the concept?
        </Text>
        <Text>
          Put simply the concept is to use sentiment analysis to detect the{' '}
          <em>emotions</em> of the words we say.
        </Text>
        <Text>
          These emotions are then used as the input for generative art in the{' '}
          <code>AuraMotions</code> installation.
        </Text>
      </Section>
      <Section>
        <Text as='h2' variant='subheading'>
          The game plan
        </Text>
        <Text>
          To <em>talk to water</em>, we needed to solve three things in order:
        </Text>
        <Text as='ol'>
          <li>
            <strong>Speech to text</strong> — convert human voice into the words
            they speak
          </li>
          <li>
            <strong>Sentiment analysis</strong> — determine the emotions of
            those words
          </li>
          <li>
            <strong>Stream results</strong> — connect with{' '}
            <code>AuraMotions</code>
          </li>
        </Text>
      </Section>
      <Section>
        <Text as='h3' size='sm' variant='subheading'>
          1. Speech-to-text
        </Text>
        <Text>
          We can not imagine our lives without the use of{' '}
          <Link href='https://chat.openai.com/' target='_blank'>
            ChatGPT
          </Link>{' '}
          anymore. But did you know OpenAI has a forgotten little brother,
          especially after the release of{' '}
          <Link href='https://openai.com/sora' target='_blank'>
            sora
          </Link>
          ?
        </Text>
        <Text>
          <Link href='https://openai.com/research/whisper' target='_blank'>
            Whisper
          </Link>{' '}
          is{' '}
          <em>
            “an open-sourced neural net that approaches human level robustness
            and accuracy on English speech recognition”
          </em>
          .
        </Text>
        <Text>
          Some cool folks even built a Python wrapper around it — free, local,
          and surprisingly easy to use. Here is what that looks like:
        </Text>
        <CodeBlock
          code={`
\`\`\`python
from pywhispercpp.examples.assistant import Assistant

def commands_callback(model_output):
    print(f"user said: {model_output}")

    # TODO: sentiment analysis

my_assistant = Assistant(
    commands_callback=commands_callback,
    n_threads=8)

my_assistant.start()
\`\`\`
                    `}
        />
        <Text>And just like that we have our speech-to-text working.</Text>
      </Section>
      <Section>
        <Text as='h3' size='sm' variant='subheading'>
          2. Sentiment analysis
        </Text>
        <Text>
          Now that we have the text, we need to determine the <em>emotion</em>{' '}
          of the words. Are they positive, negative, neutral or …?
        </Text>
        <Text>
          A tool I have been wanting to play around with for a while now was{' '}
          <Link href='https://huggingface.co/' target='_blank'>
            Hugging Face
          </Link>
          .
        </Text>
        <Text>
          Hugging face allows you and me, as mere mortals, to use very
          sophisticated open-sourced machine learning models.
        </Text>
        <Text>
          In our case we will use a{' '}
          <Link
            href='https://huggingface.co/models?pipeline_tag=text-classification'
            target='_blank'
          >
            text-classification model
          </Link>{' '}
          to detect the emotion behind the words. Plugging that in looks like
          this:
        </Text>
        <CodeBlock
          code={`
\`\`\`python
from pywhispercpp.examples.assistant import Assistant # [!code word:text-classification]
from transformers import pipeline

model = "j-hartmann/emotion-english-distilroberta-base"
classifier = pipeline("text-classification", model=model, return_all_scores=True) # [!code focus]

def commands_callback(model_output):
    print(f"user said: {model_output}")

    print("feels like:") # [!code focus]
    for sentiment in classifier(model_output)[0]: # [!code focus]
        print(f"{sentiment['label']}: {sentiment['score']}") # [!code focus]

        # TODO: stream results # [!code focus]

my_assistant = Assistant(
    commands_callback=commands_callback,
    n_threads=8)

my_assistant.start()
\`\`\`
                    `}
        />
        <Text>Like magic 🪄,</Text>
        <Text>
          reasonably accurate sentiment analysis with a few lines of code.
        </Text>
      </Section>
      <Section>
        <Text as='h3' size='sm' variant='subheading'>
          3. Stream results
        </Text>
        <Text>
          In a serious engineering team this would spark days of debate —
          protocols, throughput, latency, reliability. But we are bodging here.
          We <em>just</em> need to get some data from one tool to another.
        </Text>
        <Text>
          At the university we have set-up a{' '}
          <Link href='https://mosquitto.org/' target='_blank'>
            MQTT broker
          </Link>{' '}
          to do just that.
        </Text>
        <Text>
          Even though{' '}
          <Link
            href='https://en.wikipedia.org/wiki/User_Datagram_Protocol'
            target='_blank'
          >
            UDP messaging
          </Link>{' '}
          would probably have been a better fit, MQTT was already there,
          already configured, and already working. Good enough. Here is the
          final version:
        </Text>
        <CodeBlock
          code={`
\`\`\`python
from pywhispercpp.examples.assistant import Assistant
from transformers import pipeline
import paho.mqtt.client as mqtt # [!code focus]

client = mqtt.Client("talking-to-water" + str(random.randint(0, 1000))) # [!code focus]
client.username_pw_set("*****", "*****")
client.connect("*****")
client.loop_start()

model = "j-hartmann/emotion-english-distilroberta-base"
classifier = pipeline("text-classification", model=model, return_all_scores=True)

def commands_callback(model_output):
    print(f"user said: {model_output}")

    print("feels like:")
    for sentiment in classifier(model_output)[0]:
        print(f"{sentiment['label']} {sentiment['score']}")

        client.publish(f"AuraMotions/{sentiment['label']}", sentiment['score']) # [!code focus]

my_assistant = Assistant(
    commands_callback=commands_callback,
    n_threads=8)

my_assistant.start()
\`\`\`
                    `}
        />
        <Text>And that&apos;s it.</Text>
        <Text>
          We can now <em>talk to water</em>.
        </Text>
        <Text>
          From here on out the students could use emotions sent by the MQTT
          messages to create any (generated) visual representation they need.
        </Text>
      </Section>
      <Section variant='full' as='figure'>
        <Text variant='note' as='figcaption'>
          An example of generative visuals in{' '}
          <Link href='https://derivative.ca/' target='_blank'>
            TouchDesigner
          </Link>{' '}
          using the MQTT messages from the sentiment analysis tool.
        </Text>
        <Video src={talkingToWaterVideo} />
      </Section>
      <Section>
        <Text as='h3' size='sm' variant='subheading'>
          Magic with 30 lines of code
        </Text>
        <Text>
          By standing on the shoulder of giants, we can bodge together our
          wildest imaginations.
        </Text>
        <Text>Thank you random strangers on the internet ❤️.</Text>
      </Section>
      <Section>
        <Text as='h2' variant='subheading'>
          Experience it yourself
        </Text>
        <Text>Before going down the rabbit hole and I will lose you.</Text>
        <Text>
          You can experience the project yourself or use it as the basis for
          your next bodge project!
        </Text>
      </Section>
      <Section className='flex gap-4 justify-center flex-col items-center lg:flex-row'>
        <Link
          href='https://github.com/xiduzo/whisper-sentiment-analysis'
          target='_blank'
        >
          <CallToAction icon={<GithubIcon />}>Check out the code</CallToAction>
        </Link>
        <Link
          href='https://hub.docker.com/repository/docker/xiduzo/whisper-sentiment-analysis/general'
          target='_blank'
        >
          <CallToAction icon={<ContainerIcon />}>Run with docker</CallToAction>
        </Link>
      </Section>
      <Section aria-hidden='true'>
        <Text className='text-center my-96'>🐇</Text>
      </Section>
      <Section className='mt-96'>
        <Text as='h2' variant='subheading'>
          Down the rabbit hole
        </Text>
        <Text>Awesome, you made it this far.</Text>
        <Text>
          That means you are either really bored or a super nerd — either way, let us go!
        </Text>
      </Section>
      <Section>
        <Text as='h3' size='sm' variant='subheading'>
          Works on my machine
        </Text>
        <Text>
          While the code presented above worked on my machine, and probably
          works on your machine with some technical knowledge, the bodged
          solution is not without its flaws.
        </Text>
        <Text>
          While the project runs fine when all tools and dependencies are
          available, it was breaking down when the students tried to run it on
          their own machines.
        </Text>
        <Text>
          Either (the correct version of) python was not installed or
          dependencies, like <code>ffmpeg</code>, were not available on the
          students’ machines.
        </Text>
      </Section>
      <Section as='figure'>
        <Image
          src='/talking-to-water/works-on-my-machine.webp'
          alt='works on my machine meme'
          width={422}
          height={585}
          className='mx-auto'
        />
      </Section>
      <Section>
        <Text as='h3' size='sm' variant='subheading'>
          Docker to the rescue!
        </Text>
        <Text>
          Mismatching versions and missing dependencies is a common and solved
          problem in software development.
        </Text>
        <Text>
          We make a <code>Dockerfile</code> and ship it that way.
        </Text>
        <CodeBlock
          code={`
\`\`\`dockerfile
FROM python:3.11.7

# Get dependencies to make the container to work
RUN apt update && apt install -y ffmpeg alsa-utils pulseaudio pulseaudio-utils libportaudio2 libasound-dev nano && apt clean

# Install the required packages
WORKDIR /usr/src/app
RUN pip install --upgrade pip
COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

# Install pywhispercpp repository
RUN git clone --recurse-submodules https://github.com/abdeladim-s/pywhispercpp.git

# Build and install pywhispercpp
WORKDIR /usr/src/app/pywhispercpp
RUN python -m build --wheel
RUN pip install dist/pywhispercpp-*.whl

# Copy the main.py file
WORKDIR /usr/src/app
COPY main.py ./
COPY src ./

# Run the project
CMD ["python3", "-u", "main.py"]
\`\`\`
                    `}
        />
        <Text>
          Voil&agrave;, packaging the whole project neatly in a docker container
          will solve all our problems right?
        </Text>
        <Text className='mt-28'>Right?!</Text>
      </Section>
      <Section as='figure'>
        <Text variant='note' as='figcaption'>
          New tool, new issue
        </Text>
        <Image
          src='/talking-to-water/works-on-my-docker.webp'
          alt="Image containing two characters talking to each other. On the left image a person says 'It works on my machine'. On the right image a person says 'It works on my container'."
          width={800}
          height={455}
          className='mx-auto'
        />
      </Section>
      <Section>
        <Text as='h3' size='sm' variant='subheading'>
          The final bodge
        </Text>
        <Text>
          While docker solved the problem of dependencies, it introduced a new
          problem.
        </Text>
        <Text>
          Audio was not being captured by the container, at least not on macOS
          machines.
        </Text>
        <Text>
          We don’t have the luxury of running docker with{' '}
          <code>--device /dev/snd</code> as you would on a linux machine.
        </Text>
        <Text>
          After some googling I found a tool called{' '}
          <Link
            href='https://www.freedesktop.org/wiki/Software/PulseAudio/'
            target='_blank'
          >
            PulseAudio
          </Link>{' '}
          which could <em>”[…] transfer audio to a different machine […]”</em>.
        </Text>
        <Text>
          This could be to a machine on the other side of the room, building,
          city, world or to a docker container running on the same machine.
        </Text>
        <Text>
          To make installing <code>PulseAudio</code> as easy as possible for the
          students, I wrote a small bash script.
        </Text>
        <CodeBlock
          code={`
\`\`\`sh
#!/bin/bash
if [ -z "$(brew -v)" ]; then
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
fi

brew install pulseaudio

pulseaudio_version=$(echo "$(pulseaudio --version)" | awk '{print $2}')

file="/opt/homebrew/Cellar/pulseaudio/$pulseaudio_version/etc/pulse/default.pa.d"
if ! test -e "$file"; then
    touch "$file"
fi

echo "$(cat .config/pulse/pulseaudio.conf)" >> /opt/homebrew/Cellar/pulseaudio/$pulseaudio_version/etc/pulse/default.pa.d

brew services restart pulseaudio

sleep 5
pulseaudio --check -v # Make sure everything is working
\`\`\`
                    `}
        />
        <Text>
          So finally, the students (and you) can run the project with two simple
          commands:
        </Text>
        <Text as='ol'>
          <li>
            <code>./install-pulseaudio-for-mac.sh</code>
          </li>
          <li>
            <code>
              docker run --net=host --privileged -e PULSE_SERVER=_HOST_IP_
              xiduzo/whisper-sentiment-analysis:latest
            </code>
          </li>
        </Text>
      </Section>
    </>
  );
}
