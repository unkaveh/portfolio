export default function(){
  this.transition(
    this.fromRoute('index'),
    this.toRoute('resume'),
    this.use('fade'),
    this.reverse('fade')
  );
  this.transition(
    this.fromRoute('resume' || 'index'),
    this.toRoute('portfolio'),
    this.use('fade'),
    this.reverse('fade')
  );
  this.transition(
    this.hasClass('moreInfo'),
    this.toValue(true),
    this.use('toDown'),
    this.reverse('toUp')
  );
}
