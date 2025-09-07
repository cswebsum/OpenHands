from openhands.controller.agent import Agent
from openhands.controller.state.state import State
from openhands.core.config import AgentConfig
from openhands.events.action import AgentFinishAction, MessageAction
from openhands.llm.llm_registry import LLMRegistry


class CulturalLocalizationAgent(Agent):
    """
    An agent that specializes in adapting software to different cultural contexts.
    """
    VERSION = '1.0'

    def __init__(
        self,
        config: AgentConfig,
        llm_registry: LLMRegistry,
    ):
        super().__init__(config, llm_registry)

    def step(self, state: State) -> MessageAction | AgentFinishAction:
        if state.iteration > 0:
            return AgentFinishAction()
        return MessageAction('Hello! I am the Cultural Localization Agent. I am ready to help you adapt your software for different cultures.')
