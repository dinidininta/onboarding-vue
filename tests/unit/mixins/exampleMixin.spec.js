import { shallowMount } from '@vue/test-utils';
import exampleMixin from '@/mixins/exampleMixin';

describe('#exampleMixin', () => {
  const wrapper = shallowMount({
    render() {},
    data: () => ({
      property: 'HELLO',
      debiturName: 'kahfi',
    }),
    mixins: [exampleMixin],
  });

  it('should return string', () => {
    const expectedResult = 'FROM MIXIN: kahfi';

    const actualResult = wrapper.vm.sumAmount();

    expect(actualResult).toEqual(expectedResult);
  });
});
