import { useTranslation } from "react-i18next";
import { I18nKey } from "#/i18n/declaration";
import AgentList from "#/components/features/settings/agent-list";

function AgentSettings() {
  const { t } = useTranslation();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{t(I18nKey.SETTINGS$AGENTS_TAB_TITLE)}</h1>
      <p className="mt-2">{t(I18nKey.SETTINGS$AGENTS_TAB_DESCRIPTION)}</p>
      <AgentList />
    </div>
  );
}

export default AgentSettings;
