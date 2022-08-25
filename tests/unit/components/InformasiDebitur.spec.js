import { shallowMount } from '@vue/test-utils';
import InformasiDebitur from '@/components/InformasiDebitur.vue';

describe('InformasiDebitur', () => {
  const wrapper = shallowMount(InformasiDebitur, {
    stubs: {
      input: {
        template: '<input @change=\'$listeners.change\'/>',
      },
      'b-button': {
        template: '<input @change=\'$listeners.change\'/>',
      },
    },
  });

  it('should set debiturName', () => {
    const debiturInput = wrapper.find('#debiturName');
    wrapper.vm.sumAmount = jest.fn().mockReturnValue();
    debiturInput.trigger('change');

    expect(wrapper.vm.debiturName).toEqual('kahfi');
  });
});
