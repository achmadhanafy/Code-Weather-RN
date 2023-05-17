import {SIZE} from '../../../../../../util/constant';

export default {
  container: {
    paddingHorizontal: 5,
    paddingVertical: 10,
    borderRadius: 8,
    marginTop: 16,
  },
  rowContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    rowGap: 10,
  },
  item: {
    flexDirection: 'row',
    minWidth: (SIZE.screen.width - 42) / 3,
  },
};
