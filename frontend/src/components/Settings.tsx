import { useContext, useEffect, useState } from "react";
import { CrescentIcon, GearIcon, TrashIcon, UserIcon } from "../icons";
import SettingsRow from "./SettingsRow";
import { chooseTheme } from "../utilities";
import ThemeContext, { modeProps } from "../context/ThemeContext";

function Settings() {
  const [showSettings, setShowSettings] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    function dismissSettingModal() {
      setShowSettings(false);
    }

    window.addEventListener("click", dismissSettingModal);
    return () => {
      window.removeEventListener("click", dismissSettingModal);
    };
  }, []);

  // active or disactivate dark mode
  const specifyTheme = (isDark: boolean) => {
    const mode: modeProps = isDark ? "dark" : "light";
    localStorage.setItem("msgApp-mode", mode);
    chooseTheme(mode);
    setTheme(mode);
  };

  return (
    <section
      onClick={e => e.stopPropagation()}
      aria-labelledby="settings"
      className="relative"
    >
      <GearIcon
        role="button"
        onclick={() => setShowSettings(!showSettings)}
        width="28"
        height="28"
        style="cursor-pointer fill-thirdBg hover:fill-secondaryBg hover:rotate-180 transition-all duration-300 ease-out"
      />

      {/* settingsModal */}
      <ul
        id="settings"
        className={`w-56 bg-thirdBg rounded border drop-shadow-xl absolute z-10 left-full bottom-full transition-all duration-500 ${
          showSettings ? "scale-100" : "invisible opacity-0 scale-0"
        }`}
      >
        <SettingsRow
          title="My Profile"
          refIcon={<UserIcon height="30" width="30" style="fill-sideBg" />}
          color="sideBg"
          withArrow={true}
        />

        <SettingsRow
          title="Delete Account"
          color="redIcons"
          refIcon={
            <TrashIcon height="28" width="28" style="fill-redIcons mr-1" />
          }
          withArrow={true}
        />

        <SettingsRow
          title="Dark mode"
          color="black"
          refIcon={<CrescentIcon height="30" width="30" />}
          modeBox={
            <input
              onChange={e => specifyTheme(e.target.checked)}
              checked={theme === "dark" ? true : false}
              type="checkbox"
              placeholder="active dark mode"
              className="appearance-none bg-white cursor-pointer relative w-12 h-5 border border-gray-400 rounded-xl after:left-0.5 after:absolute after:top-1/2 after:-translate-y-1/2 after:w-4 after:h-4 after:bg-blueBar after:rounded-full checked:bg-black checked:after:bg-thirdBg checked:after:translate-x-[calc(1.75rem-0.125rem)]  transition-all duration-300 ease-out"
            />
          }
        />
      </ul>
    </section>
  );
}

export default Settings;
