import { shallowMount } from '@vue/test-utils';
import Onboarding from '@/components/Onboarding.vue';

describe('Onboarding', () => {
  const wrapper = shallowMount(Onboarding, {
    propsData: {
      title: 'title',
    },
  });

  it('should render title', () => {
    const actualResult = 'title';

    const titleTxt = wrapper.find('#title');

    expect(titleTxt.text()).toEqual(actualResult);
  });

  it('should render changed props', async () => {
    const actualResult = 'test props';
    wrapper.setProps({
      title: 'test props',
    });
    await wrapper.vm.$nextTick();

    const titleTxt = wrapper.find('#title');

    expect(titleTxt.text()).toEqual(actualResult);
  });
});
