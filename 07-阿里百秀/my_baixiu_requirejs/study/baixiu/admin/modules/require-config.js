require.config({
  baseUrl: '/study/baixiu/',
  paths: {
    template: './assets/vendors/template/template-web',
    jquery: './assets/vendors/jquery/jquery',
    pagination: './assets/vendors/jquery-pagination/jquery.pagination',
    bootstrap: './assets/vendors/bootstrap/js/bootstrap',
    comments: './admin/modules/comments/comments'
  },
  shim: {
    pagination: {
      deps: ['jquery']
    },
    bootstrap: {
      deps: ['jquery']
    }
  }
});