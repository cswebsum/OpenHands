import os
from typing import TYPE_CHECKING

from openhands.agenthub.codeact_agent.codeact_agent import CodeActAgent
from openhands.core.config import AgentConfig
from openhands.llm.llm_registry import LLMRegistry
from openhands.runtime.plugins import AgentSkillsRequirement, JupyterRequirement
from openhands.utils.prompt import PromptManager

if TYPE_CHECKING:
    from litellm import ChatCompletionToolParam


class TestGenerationAgent(CodeActAgent):
    VERSION = '1.0'
    """
    The Test Generation Agent is equipped with a set of tools for generating tests for code.
    """

    sandbox_plugins = [
        AgentSkillsRequirement(),
        JupyterRequirement(),
    ]

    def __init__(self, config: AgentConfig, llm_registry: LLMRegistry) -> None:
        """Initializes a new instance of the TestGenerationAgent class.

        Parameters:
        - config (AgentConfig): The configuration for this agent
        """
        super().__init__(config, llm_registry)

    @property
    def prompt_manager(self) -> PromptManager:
        if self._prompt_manager is None:
            self._prompt_manager = PromptManager(
                prompt_dir=os.path.join(os.path.dirname(__file__), 'prompts'),
                system_prompt_filename=self.config.resolved_system_prompt_filename,
            )
        return self._prompt_manager

    def _get_tools(self) -> list['ChatCompletionToolParam']:
        """
        Gets the tools for the Test Generation Agent.
        """
        tools = super()._get_tools()
        # TODO: Add test generation specific tools here
        return tools
