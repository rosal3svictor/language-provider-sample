import Select, { type SelectChangeEvent } from '@mui/material/Select';
import { useLanguageProviderContext } from '@components';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';

import reactLogo from './assets/react.svg';

import './App.css';

function App(): JSX.Element {
  const {
    currentLanguage,
    useTranslation,
    setCurrentLanguage,
    supportedLanguages,
  } = useLanguageProviderContext();
  const { t } = useTranslation();
  const [lang, setLang] = useState<string>(currentLanguage.locale);

  const handleChange = (event: SelectChangeEvent): void => {
    setCurrentLanguage(event.target.value);
    setLang(event.target.value);
  };

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <FormControl>
          <InputLabel id="demo-lang-label">{t('input.label')}</InputLabel>
          <Select
            labelId="demo-lang-label"
            data-testid="demo-lang"
            value={lang}
            label={t('input.label')}
            onChange={handleChange}
          >
            <MenuItem value={supportedLanguages[8].locale}>
              {supportedLanguages[8].name}
            </MenuItem>
            <MenuItem value={supportedLanguages[11].locale}>
              {supportedLanguages[11].name}
            </MenuItem>
            <MenuItem value={supportedLanguages[13].locale}>
              {supportedLanguages[13].name}
            </MenuItem>
          </Select>
        </FormControl>

        <p>{t('helperTexts.primary')}</p>
      </div>
      <p className="read-the-docs">{t('helperTexts.secondary')}</p>
    </div>
  );
}

export default App;
