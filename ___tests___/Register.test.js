import { Register } from '../View/llc-online/src/components/Register';
import axios from 'axios';

jest.mock('axios');

describe('Register component', () => {
  let props;
  let wrapper;

  beforeEach(() => {
    props = {
      onFormSwitch: jest.fn(),
    };
    wrapper = shallow(<Register {...props} />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render the component', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('should update state on input change', () => {
    const input = wrapper.find('#email');
    input.simulate('change', { target: { value: 'test@test.com' } });

    expect(wrapper.state('email')).toEqual('test@test.com');
  });

  it('should call handleSubmit on form submission', () => {
    const spy = jest.spyOn(wrapper.instance(), 'handleSubmit');
    wrapper.instance().forceUpdate();

    const form = wrapper.find('.register-form');
    form.simulate('submit', { preventDefault() {} });

    expect(spy).toHaveBeenCalled();
  });

  it('should call axios post on form submission', async () => {
    axios.post.mockResolvedValue({ data: {} });

    const form = wrapper.find('.register-form');
    form.simulate('submit', { preventDefault() {} });

    expect(axios.post).toHaveBeenCalled();
  });
});
