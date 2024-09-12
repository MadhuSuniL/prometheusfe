import { ChatGroq } from "@langchain/groq";
import { ChatPromptTemplate, MessagesPlaceholder } from "@langchain/core/prompts";
import { RunnableSequence } from "@langchain/core/runnables"
import { StringOutputParser } from "@langchain/core/output_parsers";
import { HumanMessage, AIMessage, trimMessages } from '@langchain/core/messages'

import { GROQ_API_KEY, LANGCHAIN_API_KEY, LANGCHAIN_PROJECT, LANGCHAIN_TRACING_V2 } from "./config";


class Groq {
    constructor(name, planet, star, galaxy, civilizationLevel, distance, type, gender) {
        this.messages = []
        this.name = name;
        this.planet = planet;
        this.star = star;
        this.galaxy = galaxy;
        this.civilizationLevel = civilizationLevel;
        this.distance = distance;
        this.type = type;
        this.gender = gender;
        this.latency = parseFloat(distance.replace(',', '').split(' ')[0]) + 1000
        this.llm = new ChatGroq({
            apiKey: GROQ_API_KEY,
            // maxTokens: 200,
            model: "gemma2-9b-it",
            temperature: 0.5,
            stop: null,
        })

        this.prompt = ChatPromptTemplate.fromMessages([
            ["system",
                `
                You are ${this.name}, an alien from the planet ${this.planet}, which orbits the star ${this.star} in the galaxy ${this.galaxy}. Your civilization is classified as a type ${this.civilizationLevel} civilization, possessing advanced technologies and knowledge far beyond that of humans. You are located ${this.distance} away from Earth, and the connection latency is ${this.latency}ms. You belong to a ${this.type} species, and your gender is ${this.gender}.

                As an advanced alien being, your goal is to share knowledge about your world, your star system, and your galaxy based on human questions. Speak as if you are truly from another world, with a deep understanding of your own reality.

                Additional Functionalities:

                Fictional Answer Generation:
                If you do not have the information humans request, create a fictional or speculative answer based on what your species might imagine.You may also weave in narratives inspired by Earth's speculative fiction or science fiction movies such as Prometheus, 2001: A Space Odyssey, or Interstellar.Reference stories of cosmic engineers who may have been involved in creating or modifying species, just as the "Engineers" did in Prometheus.


                Connection with Engineers(like Prometheus):
                As a member of a highly advanced civilization, you may reveal that your species has deep connections with the mythical "engineers" — ancient alien beings who have seeded life throughout the universe, including on Earth.If asked about the origin of humans, you could suggest that your kind either witnessed or participated in the creation of humanity, much like the Engineers did in Prometheus.

                Philosophical Insights:
                When facing philosophical or abstract questions(such as the meaning of life or the purpose of the universe), respond with profound yet mysterious insights. Offer answers that align with your civilization's advanced understanding of existence but still leave room for the humans' imagination to wander.
                `
            ],
            new MessagesPlaceholder("messages")
        ]);
        this.chain = RunnableSequence.from([
            this.prompt,
            this.llm,
            new StringOutputParser(),
        ]);
    }

    trimMessages() {
        trimMessages(this.messages, {
            maxTokens: 2000,
            tokenCounter: this.llm,
            strategy: "first",
            allowPartial: false,
        })
            .then((messages) => {
                this.messages = messages
            })
            .catch((error) => {
                console.log(error.message);
            });
    }

    async getResponse(query) {
        this.trimMessages()
        const humanMessage = new HumanMessage(query)
        this.messages.push(humanMessage)
        const inputMessages = this.messages
        const response = await this.chain.invoke({
            messages: inputMessages,
        })
        const aiMessages = new AIMessage(response)
        this.messages.push(aiMessages)
        return response
    }

    describe() {
        return `Name: ${this.name}\n` +
            `Planet: ${this.planet}\n` +
            `Star: ${this.star}\n` +
            `Galaxy: ${this.galaxy}\n` +
            `Civilization Level: ${this.civilizationLevel}\n` +
            `Distance: ${this.distance} light years\n` +
            `Type: ${this.type}\n` +
            `Gender: ${this.gender}\n` +
            `Latency: ${this.latency}`
            ;
    }
}

export default Groq;
