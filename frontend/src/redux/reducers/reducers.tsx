import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { combineReducers } from 'redux';
import notificationsReducer from '../../components/App/Notifications/notificationsSlice';
import pluginsReducer from '../../plugin/pluginsSlice';
import actionButtons from '../actionButtonsSlice';
import clusterAction from '../clusterActionSlice';
import configReducer from '../configSlice';
import detailsViewSectionsSlice from '../detailsViewSectionsSlice';
import filterReducer from '../filterSlice';
import uiReducer from './ui';

const reducers = combineReducers({
  filter: filterReducer,
  ui: uiReducer,
  clusterAction: clusterAction,
  config: configReducer,
  plugins: pluginsReducer,
  actionButtons: actionButtons,
  detailsViewSections: detailsViewSectionsSlice,
  notifications: notificationsReducer,
});

export type RootState = ReturnType<typeof reducers>;

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export default reducers;
