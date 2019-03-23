AC_PREREQ(2.60)
AC_INIT(megacity-region-data, 0.0.2, [Jeff Garzik <jgarzik@pobox.com>])
AC_CONFIG_SRCDIR([megacityregions.json.gz])
AC_CONFIG_HEADERS([mcr-config.h])

AC_CANONICAL_HOST

AM_INIT_AUTOMAKE([subdir-objects foreign])
AM_MAINTAINER_MODE([enable])

dnl Checks for programs
AC_PROG_CXX

dnl Checks for header files.
AC_HEADER_STDC

dnl Checks for typedefs, structures, and compiler characteristics.

dnl -----------------------------
dnl Checks for required libraries
dnl -----------------------------
dnl AC_CHECK_LIB(gssrpc, gssrpc_svc_register, GSSRPC_LIBS=-lgssrpc, exit 1)

dnl AC_CHECK_LIB(argp, argp_parse, ARGP_LIBS=-largp)

AC_LANG(C++)

dnl -------------------------------------
dnl Checks for optional library functions
dnl -------------------------------------
dnl AC_CHECK_FUNCS(fdatasync lseek64 srand48_r xdr_u_quad_t)

dnl -----------------
dnl Configure options
dnl -----------------

dnl --------------------------
dnl autoconf output generation
dnl --------------------------

dnl AC_SUBST(GSSRPC_LIBS)
dnl AC_SUBST(DB4_LIBS)
dnl AC_SUBST(EVENT_LIBS)
dnl AC_SUBST(ARGP_LIBS)

AC_CONFIG_FILES([Makefile])
AC_OUTPUT

