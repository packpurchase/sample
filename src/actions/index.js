import * as actionTypes from '../constants/actionTypes';

export const updateScheduledItem = (itemId, args) => ({
  args,
  itemId,
  type: actionTypes.UPDATE_SCHEDULED_ITEM,
});
