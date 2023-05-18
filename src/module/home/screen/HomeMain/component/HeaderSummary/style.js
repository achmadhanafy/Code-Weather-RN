import {SIZE} from '../../../../../../util/constant';

export default {
  container: {
    paddingHorizontal: 10,
    paddingVertical: 16,
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
    minWidth: (SIZE.screen.width - 52) / 3,
  },
};
