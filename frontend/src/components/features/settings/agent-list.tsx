import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { I18nKey } from "#/i18n/declaration";
import { Toggle } from "openhands-ui";

interface Agent {
  name: string;
  description: string;
  enabled: boolean;
}

const AGENTS: Agent[] = [
  {
    name: "Data Science Agent",
    description: "An agent for data analysis, manipulation, and machine learning.",
    enabled: true,
  },
  {
    name: "Documentation Agent",
    description: "An agent for generating documentation for code.",
    enabled: true,
  },
  {
    name: "Test Generation Agent",
    description: "An agent for generating tests for code.",
    enabled: true,
  },
];

function AgentList() {
  const { t } = useTranslation();
  const [agents, setAgents] = useState<Agent[]>(AGENTS);

  const handleToggle = (agentName: string) => {
    setAgents((prevAgents) =>
      prevAgents.map((agent) =>
        agent.name === agentName ? { ...agent, enabled: !agent.enabled } : agent
      )
    );
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">{t(I18nKey.SETTINGS$NAV_AGENTS)}</h2>
      <ul className="mt-4 space-y-4">
        {agents.map((agent) => (
          <li key={agent.name} className="flex items-center justify-between p-4 border rounded-lg">
            <div>
              <h3 className="text-lg font-semibold">{agent.name}</h3>
              <p className="text-sm text-gray-400">{agent.description}</p>
            </div>
            <div className="flex items-center">
              <Toggle
                checked={agent.enabled}
                onChange={() => handleToggle(agent.name)}
                onText="Enabled"
                offText="Disabled"
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AgentList;
