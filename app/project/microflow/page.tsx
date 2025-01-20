import { Section } from "@/components/custom/section";
import { Text } from "@/components/custom/typography";
import Link from "next/link";
import { Safari } from "@/components/magic-ui/safari";
import { CodeBlock } from "@/components/custom/code-block";
import { Button } from "@/components/ui/button";
import { Image } from "@/components/custom/image";
import { CallToAction } from "@/components/custom/call-to-action";
import { Technologies } from "@/components/custom/technologies";
import { Hero } from "@/components/custom/hero";

export default function Page() {
    return (
        <>
            <Hero
                title="Microflow"
                subtitle="Microcontrollers made simple"
                readTime={8}
                publishDate="Sep 14 2024"
                emoji="E1D3"
                className="bg-orange-500"
                link="https://microflow.vercel.app/"
            />
            <Technologies
                technologies={[
                    "@xyflow/react",
                    "Arduino Firmata",
                    "Electron",
                    "Figma plugin API",
                    "Johnny-Five",
                    "shadcn/ui",
                    "MQTT",
                ]}
            />
            <Section>
                <Text as="h2" variant="subheading">
                    Interactivity
                </Text>
                <Text>
                    After helping students at the{" "}
                    <Link
                        href="https://www.masterdigitaldesign.com/"
                        target="_blank"
                    >
                        Master Digital Design
                    </Link>{" "}
                    for some years, I noticed that many students struggled with
                    a common issue: microcontrollers.
                </Text>
                <Text>
                    The students want to create interactive prototypes, but the
                    learning curve is often too steep for most designers who had
                    (almost) never touched code before.
                </Text>
                <Text>
                    And I must agree; even though I’ve been working with
                    microcontrollers for several years now, switching from my
                    usual JavaScript environment to the Arduino IDE still is
                    rough for me.
                </Text>
            </Section>
            <Section>
                <Text as="h3" variant="subheading" size="sm">
                    Rapid prototyping
                </Text>
                <Text>
                    While there are some tools available that simplify working
                    with microcontrollers, such as{" "}
                    <Link href="https://www.arduinoblocks.com/" target="_blank">
                        Arduino Blocks
                    </Link>
                    ,{" "}
                    <Link
                        href="https://edukits.co/code/#/editor"
                        target="_blank"
                    >
                        Code kit
                    </Link>{" "}
                    or{" "}
                    <Link href="http://johnny-five.io/" target="_blank">
                        Johnny Five
                    </Link>
                    , starting a new project still requires a lot of
                    Arduino-like knowledge.
                </Text>
                <Text>That’s where Microflow comes in.</Text>
                <Text>
                    Microflow is a set of tools designed to facilitate
                    prototyping for interactivity without the need to worry
                    about low-level coding, or coding at all for that matter!
                </Text>
            </Section>
            <Section>
                <Text size="sm">Microflow consists of 2 tools so far:</Text>
                <Text as="ol" size="sm">
                    <li>
                        <strong>Microflow hardware bridge</strong> — a Figma
                        plugin that enables interaction with your Figma
                        variables via MQTT.
                    </li>
                    <li>
                        <strong>Microflow studio</strong> — a desktop
                        application that allows you to create interactive
                        prototypes using a visual, flow-based interface.
                    </li>
                </Text>
            </Section>
            <Section className="items-center flex flex-col ">
                <Text className="col-span-12" variant="note">
                    Microflow hardware bridge running in Figma
                </Text>
                <Safari
                    src="/microflow/microflow-hardware-bridge.png"
                    alt="An example design in Figma connected to the Microflow hardware bridge plugin"
                />
            </Section>
            <Section>
                <Text as="h2" variant="subheading">
                    Microflow hardware bridge
                </Text>
                <Text>I think Figma is an awesome tool.</Text>
                <Text>
                    After the introducion of <em>variables</em> in Figma, you
                    can create some pretty nifty prototypes and fool any
                    stakeholders, making them believe they’re already viewing a
                    real application.
                </Text>
                <Text>
                    What is still missing, however, is the interaction with the
                    physical world.
                </Text>
            </Section>
            <Section>
                <Text as="h3" variant="subheading" size="sm">
                    MQTT
                </Text>
                <Text>
                    Microflow Hardware Bridge relies on MQTT to communicate
                    between Figma and the plugin.
                </Text>
                <Text>
                    This enables any client – whether in your browser, mobile
                    app, microcontroller, or even an IoT device like your fridge
                    (if it sends the correct data) – to send and receive
                    messages from Microflow Hardware Bridge.
                </Text>
                <Text>
                    The core of this plugin is achieved through a simple React
                    component:
                </Text>
                <CodeBlock
                    code={`
\`\`\`typescript
export function MqttVariableMessenger() {
	const { publish, subscribe, uniqueId } = useMqtt();
	const publishedVariableValues = useRef(new Map());

	useEffect(() => {
		subscribe(\`microflow/\${uniqueId}/variables/request\`, topic => {
			publish(\`microflow/\${uniqueId}/variables/response\`, publishedVariableValues);
		});

		subscribe(\`microflow/\${uniqueId}/variable/+/set\`, async (topic, message) => {
			const variableId = topic.split('/').at(2);
			await sendMessageToFigma(SetLocalValiable(variableId, message.toString()));
		});
	}, [subscribe, publish, uniqueId]);

	// Listen to changes in variables from Figma variable panel
	useMessageListener(MESSAGE_TYPE.GET_LOCAL_VARIABLES, variables => {
		variables.forEach(async variable => {
			await publish(\`microflow/\${uniqueId}/variable/\${variable.id}\`, variable.value);
			publishedVariableValues.current.set(variable.id, variable.value);
		});
	});

	return null;
}
\`\`\`
                    `}
                />
                <Text className="mb-96">
                    Some more sorcery is happening in the{" "}
                    <code>sendMessageToFigma</code> and <code>useMqtt</code>,
                    but I’ll leave that up to your imagination.
                </Text>
                <Text size="sm" className="italic">
                    Or{" "}
                    <Link
                        href="https://github.com/xiduzo/microflow/tree/main/apps/figma-plugin"
                        target="_blank"
                    >
                        check the code
                    </Link>{" "}
                    if you are a nerd like me who likes to know how things work.
                </Text>
            </Section>
            <Section className="flex justify-center">
                <Link
                    href="https://www.figma.com/community/plugin/1373258770799080545"
                    target="_blank"
                >
                    <CallToAction>Try Microflow hardware bridge</CallToAction>
                </Link>
            </Section>
            <Section variant="full">
                <Text className="col-span-12" variant="note">
                    Microflow studio connected to Figma
                </Text>
                <Image
                    src="/microflow/microflow-studio.png"
                    alt="Example flow in Microflow studio, connected to Figma using the Microflow hardware bridge plugin"
                    width={1920}
                    height={1080}
                    className="w-full"
                />
            </Section>
            <Section>
                <Text as="h2" variant="subheading">
                    Microflow studio
                </Text>
                <Text>
                    This tool was build to make working with microcontrollers{" "}
                    <em>plug-and-play</em>.
                </Text>
                <Text>
                    In order to achieve that, there is some magic happening
                    behind the scenes.
                </Text>
            </Section>
            <Section>
                <Text as="h3" variant="subheading" size="sm">
                    Flashing firmware
                </Text>
                <Text>
                    When connecting a supported microcontroller, Microflow
                    studio will automatically detect the board and flash it with
                    the correct{" "}
                    <Link
                        href="https://docs.arduino.cc/retired/hacking/software/FirmataLibrary/"
                        target="_blank"
                    >
                        firmata firmware
                    </Link>
                    .
                </Text>
                <Text>
                    To make this work with <code>Electron</code>, the backbone
                    of the application, I stole and adapted the good parts of{" "}
                    <Link
                        href="https://github.com/noopkat/avrgirl-arduino"
                        target="_blank"
                    >
                        avrgirl-arduino
                    </Link>{" "}
                    and gave it some TS-love.
                </Text>
                <CodeBlock
                    code={`
\`\`\`typescript
import { Board, BoardName, BOARDS } from './constants';
import { SerialConnection } from './SerialConnection';

export class Flasher {
	private readonly connection: SerialConnection;
	private readonly board: Board;

	constructor(boardName: BoardName, usbPortPath: string) {
		const board = BOARDS.find(board => board.name === boardName);

		if (!board) {
			throw new Error(\`Board \${boardName} is not a know board\`);
		}

		this.board = board;
		this.connection = new SerialConnection(board.baudRate, usbPortPath);
	}

	async flash(filePath: string) {
		try {
			const protocol = new this.board.protocol(this.connection, this.board);
			await protocol.flash(filePath);
		} catch (error) {
			throw error; // Rethrow the error so the caller can handle it
		} finally {
			await this.connection.close(); // Always close the port again
		}
	}
}
\`\`\`
                    `}
                />
            </Section>
            <Section>
                <Text as="h3" variant="subheading" size="sm">
                    Code to generate code
                </Text>
                <Text>
                    Microflow studio provides a visual flow-based interface to
                    connect components and create interactions.
                </Text>
                <Text>
                    For this, I utilized <code>@xyflow/react</code>. Custom code
                    is generated for the microcontroller based on the nodes and
                    edges, as well as how the user connected them.
                </Text>
                <CodeBlock
                    code={`
\`\`\`typescript
import type { Edge, Node } from '@xyflow/react';

export function generateCode(nodes: Node[], edges: Edge[]) {
    let code = \`const Microflow = require("@microflow/components");\`;

    code += \`const nodes = new Map();\`;

    code += \`new Microflow.Board({ port: process.argv.at(-1); });\`;

    nodes.forEach(node => {
    code += \`const \${node.type}_\${node.id} = new Microflow.\${node.type}(\${node.data});\`;
    code += \`nodes.set("\${node.id}", \${node.type}_\${node.id});\`;

    const edgesGroupedByHandle = edges.reduce(
        (acc, edge) => ({
        ...acc,
        [edge.sourceHandle]: [...(acc[action.sourceHandle] || []), edge],
        }),
        {} as Record<string, Edge[]>,
    );

    Object.entries(edgesGroupedByHandle).forEach(([handle, groupedEdges]) => {
        code += \`\${node.type}_\${node.id}.on("\${handle}", () => {\`;

        groupedEdges.forEach(edge => {
            const valueTriggers = [
                'set', 'check', 'show', 'rotate',
                'red', 'green', 'blue', 'opacity',
                'from', 'to', 'publish',
            ];

            const shouldSetValue = valueTriggers.includes(edge.targetHandle);
            let value = shouldSetValue ? \`\${node.type}_\${node.id}.value\` : undefined;

            if (node.type === 'RangeMap' && shouldSetValue) {
                value = \`\${node.type}_\${node.id}.value[1]\`;
            }

            const targetNode = nodes.find(node => node.id === edge.target);
            code += \`\${targetNode?.type}_\${targetNode?.id}.\${edge.targetHandle}(\${value});\`;
        });

        code += \`}); // \${node.type}_\${node.id} - \${action}\`;
    });

    return code;
}
\`\`\`
                    `}
                />
                <Text>
                    Which is a whole lot of code, even after some
                    simplifications, to generate the following few lines of code
                    for the microcontroller:
                </Text>
                <CodeBlock
                    code={`
\`\`\`javascript
const Microflow = require("@microflow/components");

const nodes = new Map();

new Microflow.Board({ port: process.argv.at(-1) });

const Led_zuhhq2 = new Microflow.Led({"pin":13,"id":"zuhhq2"});
nodes.set("zuhhq2", Led_zuhhq2);
const Interval_4aeu4a = new Microflow.Interval({"interval":500,"id":"4aeu4a"});
nodes.set("4aeu4a", Interval_4aeu4a);

Interval_4aeu4a.on("change", () => {
    Led_zuhhq2.toggle(undefined);
}); // Interval_4aeu4a - change
\`\`\`
                    `}
                />
            </Section>
            <Section>
                <Text as="h3" variant="subheading" size="sm">
                    A wrapper around a wrapper around a wrapper
                </Text>
                <Text>
                    To communicate with the firmata firmware we have flashed on
                    the microcontroller, all <code>@microflow/components</code>{" "}
                    are wrappers around the <code>Johnny-Five</code> library —
                    Which is a wrapper around the <code>firmata.js</code>{" "}
                    library itself.
                </Text>
                <CodeBlock
                    code={`
\`\`\`typescript
import JohnnyFive, { ButtonOption } from 'johnny-five';
import { BaseComponent, BaseComponentOptions } from './BaseComponent';

export type ButtonData = Omit<ButtonOption, 'board'>;
export type ButtonValueType = boolean | number;

type ButtonOptions = BaseComponentOptions & ButtonData;

export class Button extends BaseComponent<ButtonValueType> {
	private readonly component: JohnnyFive.Button;

	constructor(options: ButtonOptions) {
		super(options, false);

		this.component = new JohnnyFive.Button(options);

		this.component.on('up', () => {
			this.value = false;
			this.eventEmitter.emit('inactive', this.value, false);
		});
		this.component.on('down', () => {
			this.value = true;
			this.eventEmitter.emit('active', this.value, false);
		});
		this.component.on('hold', () => {
			this.eventEmitter.emit('hold', this.value);
		});
	}
}
\`\`\`
`}
                />
                <Text size="lg" variant="heading" className="text-center">
                    🪆
                </Text>
            </Section>
            <Section className="flex justify-center">
                <Link href="https://microflow.vercel.app/" target="_blank">
                    <CallToAction>Try Microflow studio</CallToAction>
                </Link>
            </Section>
            <aside>
                <Section>
                    <Text as="h2" variant="subheading" size="sm">
                        Inspired by
                    </Text>
                    <Text className="flex gap-4 flex-wrap">
                        <Link
                            href="https://www.youtube.com/live/UwX0ntmJ61A?si=snK2eaVRrkk35YfM"
                            target="_blank"
                        >
                            <Button variant="outline">
                                The coding train + Noopcat video
                            </Button>
                        </Link>
                        <Link
                            href="https://edges.ideo.com/posts/figproxy"
                            target="_blank"
                        >
                            <Button variant="outline">FigProxy</Button>
                        </Link>
                        <Link href="https://www.protopie.io/" target="_blank">
                            <Button variant="outline">Protopie</Button>
                        </Link>
                        <Link href="https://blokdots.com/" target="_blank">
                            <Button variant="outline">Blokdots</Button>
                        </Link>
                        <Link href="https://nodered.org/" target="_blank">
                            <Button variant="outline">Node-RED</Button>
                        </Link>
                        <Link href="https://derivative.ca/" target="_blank">
                            <Button variant="outline">TouchDesigner</Button>
                        </Link>
                        <Link
                            href="https://dev.epicgames.com/documentation/en-us/unreal-engine/blueprints-visual-scripting-in-unreal-engine"
                            target="_blank"
                        >
                            <Button variant="outline">
                                Unreal Engine Blueprints
                            </Button>
                        </Link>
                    </Text>
                </Section>
                <Section>
                    <Text as="h2" variant="subheading" size="sm">
                        Other reads
                    </Text>
                    <Text className="flex gap-4 flex-wrap">
                        <Link
                            href="https://github.com/xiduzo/microflow"
                            target="_blank"
                        >
                            <Button variant="outline">
                                See all the code on GitHub
                            </Button>
                        </Link>
                        <Link
                            href="https://microflow.vercel.app/docs"
                            target="_blank"
                        >
                            <Button variant="outline">
                                Microflow documentation
                            </Button>
                        </Link>
                        <Link
                            href="https://github.com/xiduzo/figma-hardware-connect"
                            target="_blank"
                        >
                            <Button variant="outline">
                                First prototype on GitHub
                            </Button>
                        </Link>
                        <Link
                            href="https://github.com/xiduzo/figma-hardware-connect-with-companion"
                            target="_blank"
                        >
                            <Button variant="outline">
                                Second prototype on GitHub
                            </Button>
                        </Link>
                    </Text>
                </Section>
            </aside>
        </>
    );
}
