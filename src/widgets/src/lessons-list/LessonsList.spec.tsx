import { providersConfig } from '@app';
import { i18nConfig } from '@shared/configs';
import { fireEvent, screen, waitFor } from '@testing-library/react';

import {LessonsList} from './LessonsList';
const {storeProvider} = providersConfig
const {StoreProvider} = storeProvider

describe('Header', () => {
  const mockSwitchTheme = jest.fn();

  const initialState = {
    user: {
      authData: {
        id:'1',
        username: 'admin',
        token: 'testToken',
      },
    },
    loginFormApi: undefined,
    calendarApi: undefined,
    day: {},
    lessonsListApi: undefined,
    lessonCardApi: undefined,
    }

  const renderLessonsList = ()=> (
    <StoreProvider initialState={initialState}>
      <LessonsList/>
    </StoreProvider>
  )
  it('should render successfully', () => {
    const { baseElement } = i18nConfig.renderWithTranslation(renderLessonsList());
    expect(baseElement).toBeTruthy();
  });

});
